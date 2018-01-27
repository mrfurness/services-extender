/////GLOBAL CONTROLLER TO CALL THE REQUIRED SUB-FUNCTIONS/////

function localOrSync() {
	chrome.storage.local.get("userPrefSync", function(prefSync) {
		if (!chrome.runtime.error) {
			loadUserValues(prefSync.userPrefSync);
			//console.log("Loading Prefs");
		}
		else {
			//console.log("error");
		}
	});
};


function loadUserValues(userPrefSync) {
	//if sync is true, get keys from sync storage
	if (userPrefSync) {
		chrome.storage.sync.get(["userHighlightingEnabled","userFontSizeEnabled","userFontSizeValue","userShortcutsEnabled","userShortcutsSearch","userShortcutsPosition"], function(result) {
			if (!chrome.runtime.error) {
				pageCtrl(result);
				console.info('loadSyncValues')
				//console.log(result);
			}
			else {
				console.log("error");
			}
		});
	}
	//else get keys from local storage
	else {
		chrome.storage.local.get(["userHighlightingEnabled","userFontSizeEnabled","userFontSizeValue","userShortcutsEnabled","userShortcutsSearch","userShortcutsPosition"], function(result) {
			if (!chrome.runtime.error) {
				pageCtrl(result);
				console.info('loadLocalValues')
				//console.log(result);
			}
			else {
				console.log("error");
			}
		});
	}
}

//chrome.runtime.onMessage.addListener(function callback)
chrome.extension.onMessage.addListener(function(msg, sender) {
  if (msg.webRequest == 'tableLoaded') {
    //alert("Message recieved!");
    localOrSync();
    //console.log('tableHighlight');
  };
//console.log(msg);
//console.log(sender);
//console.log(sendResponse);
});


// This line is required to kick everything off when the page first loads
localOrSync();