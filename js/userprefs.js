//WHEN THE POPUP OPENS, SET THE VALUES FROM STORAGE

//Removing this function until I know more about the sync storage object
/*
document.body.onload = function() {
	chrome.storage.local.get("userPrefSync", function(result) {
		if (!chrome.runtime.error) {
		  console.log(result);
	  	document.getElementById("user-pref-sync").checked = result.userPrefSync;
	  	}
	  	if (result.userPrefSync){
	  		getPrefFromSync();
	  	}
	  	else {
	  		getPrefFromLocal();
	  	}
	})
}*/

document.body.onload = function() {
	getPrefFromLocal();
};

function getPrefFromSync() {
	chrome.storage.sync.get(["userHighlightingEnabled","userFontSizeEnabled",/*"userNotesEnabled",*/"userFontSizeValue","userShortcutsEnabled"], function(result) {
		if (!chrome.runtime.error) {
		  //console.log(result);

		  document.getElementById("user-highlighting-enabled").checked = result.userHighlightingEnabled;
		  document.getElementById("user-font-size-enabled").checked = result.userFontSizeEnabled;
		  //document.getElementById("user-notes-enabled").checked = result.userNotesEnabled;
		  document.getElementById("user-font-size-value").value = result.userFontSizeValue;
		  document.getElementById("user-shortcuts-enabled").checked = result.userShortcutsEnabled;
		  ShowHideFontSizeInput();
		}
		else {
			console.log("Error loading data from Chrome Sync");
		}
	});
}

function getPrefFromLocal() {
	chrome.storage.local.get(["userHighlightingEnabled","userFontSizeEnabled",/*"userNotesEnabled",*/"userFontSizeValue","userShortcutsEnabled"], function(result) {
		if (!chrome.runtime.error) {
		  //console.log(result);

		  document.getElementById("user-highlighting-enabled").checked = result.userHighlightingEnabled;
		  document.getElementById("user-font-size-enabled").checked = result.userFontSizeEnabled;
		  //document.getElementById("user-notes-enabled").checked = result.userNotesEnabled;
		  document.getElementById("user-font-size-value").value = result.userFontSizeValue;
		  document.getElementById("user-shortcuts-enabled").checked = result.userShortcutsEnabled;
		  ShowHideFontSizeInput();
		}
		else {
			console.log("Error loading data from Chrome Sync");
		}
	});
}


////////////////////// UPDATE FUNCTIONS ///////////////////////////////////////////////////////


// Listener for the save button
document.getElementById("save-user-pref").onclick = function() {
	//defaulting to FALSE until sync storage enabled
	//syncStorage = document.getElementById("user-pref-sync").checked;
	syncStorage = false;

	saveUserPrefs(syncStorage); //call the save function

	chrome.storage.local.set({ "userPrefSync" : syncStorage }, function() {
		if (!chrome.runtime.error) { //if there isnt an error
			console.info('saved');
		}
		else {
			console.log("Error saving");
		}
	});

	console.info('clicked');
	window.close();
}


//////// ACTUALLY SAVING THE DATA

function saveUserPrefs(syncStorage) {
	//determine which storage to set this in
	if (syncStorage) {
		//get and save the value of the number input
		var userHighlightingEnabled = document.getElementById("user-highlighting-enabled").value;
		chrome.storage.sync.set({ "userHighlightingEnabled" : userHighlightingEnabled }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userHighlightingEnabled");
			}
			console.info('saved in sync');
		});

		//get and save the value of the checkbox
		var userFontSizeEnabled = document.getElementById("user-font-size-enabled").checked;
		chrome.storage.sync.set({ "userFontSizeEnabled" : userFontSizeEnabled }, function() {
			if (!chrome.runtime.error) { //if there isnt an error
				console.info('saved');
				/*if (userFontSizeValue === 'true') { //if the setting is to enable
					document.getElementsByClassName('font')[0].classList.add('enabled');
				}
				else if (userFontSizeValue === 'false') {
					document.getElementsByClassName('font')[0].classList.remove('enabled');
				}*/
			}
			else {
				console.log("Error saving userFontSizeEnabled");
			}
		});

		//get and save the value of the number input
		var userFontSizeValue = document.getElementById("user-font-size-value").value;
		chrome.storage.sync.set({ "userFontSizeValue" : userFontSizeValue }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userFontSizeValue");
			}
			console.info('saved in sync');
		});

		//get and save the value of the shortcut checkbox
		var userShortcutsEnabled = document.getElementById("user-shortcuts-enabled").checked;
		chrome.storage.sync.set({ "userShortcutsEnabled" : userShortcutsEnabled }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userShortcutsEnabled");
			}
			console.info('saved in sync');
		});
	}
	else {
		//get and save the value of the shortcut checkbox
		var userHighlightingEnabled = document.getElementById("user-highlighting-enabled").checked;
		chrome.storage.local.set({ "userHighlightingEnabled" : userHighlightingEnabled }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userHighlightingEnabled");
			}
			console.info('saved in sync');
		});

		//get and save the value of the checkbox
		var userFontSizeEnabled = document.getElementById("user-font-size-enabled").checked;
		chrome.storage.local.set({ "userFontSizeEnabled" : userFontSizeEnabled }, function() {
			if (!chrome.runtime.error) { //if there isnt an error
				console.info('saved');
				/*if (userFontSizeValue === 'true') { //if the setting is to enable
					document.getElementsByClassName('font')[0].classList.add('enabled');
				}
				else if (userFontSizeValue === 'false') {
					document.getElementsByClassName('font')[0].classList.remove('enabled');
				}*/
			}
			else {
				console.log("Error saving userFontSizeEnabled");
			}
		});

		//get and save the value of the number input
		var userFontSizeValue = document.getElementById("user-font-size-value").value;
		chrome.storage.local.set({ "userFontSizeValue" : userFontSizeValue }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userFontSizeValue");
			}
			console.info('saved locally');
		});

		//get and save the value of the shortcut checkbox
		var userShortcutsEnabled = document.getElementById("user-shortcuts-enabled").checked;
		chrome.storage.local.set({ "userShortcutsEnabled" : userShortcutsEnabled }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userShortcutsEnabled");
			}
			console.info('saved in sync');
		});
	}


}


/*
document.getElementById("save-enabled-options").onclick = function() {
  //Font Size Enable
  var userFontSizeEnabled = document.getElementById("user-font-size-enabled").checked;
  chrome.storage.sync.set({ "userFontSizeEnabled" : userFontSizeEnabled }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });

  //User Notes Enable
  var userNotesEnabled = document.getElementById("user-notes-enabled").checked;
  chrome.storage.sync.set({ "userNotesEnabled" : userNotesEnabled }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });


  //window.close();
}

*/
// Open Customer Details btn
/*document.getElementById("open-customer-details").onclick = function() {
  var detailsLink = document.getElementById('CustomerSupportDetails').href;
  console.log(detailsLink);
  window.open(detailsLink,'_blank');
}
*/


/*var menu = document.querySelector('.one') // Using a class instead, see note below.
menu.classList.toggle('enabled');*/