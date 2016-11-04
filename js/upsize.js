// start stylesheet function
function stylesheet(userFontSizeValue) {

	// create sheet
	var sheet = document.createElement("style");

	// append style(s)
	sheet.appendChild(document.createTextNode(".searchResults td{font-size:"+userFontSizeValue+"px;}"))
	sheet.appendChild(document.createTextNode(".HistoryListItemMain div, .HistoryListItemMain p, .HistoryListItemMain li{font-size:"+userFontSizeValue+"px;}"))

	// append sheet to document.head
	document.head.appendChild(sheet);
};


chrome.storage.local.get("userPrefSync", function(prefSync) {
	if (!chrome.runtime.error) {
		loadUserValues(prefSync.userPrefSync);
		//console.log("Loading Prefs");
	}
	else {
		//console.log("error");
	}
});

function loadUserValues(userPrefSync) {
	if (userPrefSync) {
		chrome.storage.sync.get(["userFontSizeEnabled","userFontSizeValue"], function(result) {
			if (!chrome.runtime.error) {
				if (result.userFontSizeEnabled) {
					stylesheet(result.userFontSizeValue);
					//console.log('Enabled');
				}
				//console.log(result);
			}
			else {
				//console.log("error");
			}
		});
	}
	else {
		chrome.storage.local.get(["userFontSizeEnabled","userFontSizeValue"], function(result) {
			if (!chrome.runtime.error) {
				if (result.userFontSizeEnabled) {
					stylesheet(result.userFontSizeValue);
					//console.log('Enabled');
				}
				//console.log(result);
			}
			else {
				//console.log("error");
			}
		});
	}
}