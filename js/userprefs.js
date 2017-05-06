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
	chrome.storage.sync.get(["userHighlightingEnabled","userFontSizeEnabled",/*"userNotesEnabled",*/"userFontSizeValue","userShortcutsEnabled","userShortcutsSearch","userShortcutsPosition"], function(result) {
		if (!chrome.runtime.error) {
		  //console.log(result);

		  document.getElementById("user-highlighting-enabled").checked = result.userHighlightingEnabled;
		  document.getElementById("user-font-size-enabled").checked = result.userFontSizeEnabled;
		  //document.getElementById("user-notes-enabled").checked = result.userNotesEnabled;
		  document.getElementById("user-font-size-value").value = result.userFontSizeValue;
		  document.getElementById("user-shortcuts-enabled").checked = result.userShortcutsEnabled;
		  document.getElementById("user-shortcuts-search").checked = result.userShortcutsSearch;
		  document.getElementById("user-shortcuts-position").value = result.userShortcutsPosition;
		  toggleFontSizeInput();
		  toggleSearchOptions();
		}
		else {
			console.log("Error loading data from Chrome Sync");
		}
	});
}

function getPrefFromLocal() {
	chrome.storage.local.get(["userHighlightingEnabled","userFontSizeEnabled",/*"userNotesEnabled",*/"userFontSizeValue","userShortcutsEnabled","userShortcutsSearch","userShortcutsPosition"], function(result) {
		if (!chrome.runtime.error) {
		  //console.log(result);

		  document.getElementById("user-highlighting-enabled").checked = result.userHighlightingEnabled;
		  document.getElementById("user-font-size-enabled").checked = result.userFontSizeEnabled;
		  //document.getElementById("user-notes-enabled").checked = result.userNotesEnabled;
		  document.getElementById("user-font-size-value").value = result.userFontSizeValue;
		  document.getElementById("user-shortcuts-enabled").checked = result.userShortcutsEnabled;
		  document.getElementById("user-shortcuts-search").checked = result.userShortcutsSearch;
		  document.getElementById("user-shortcuts-position").value = result.userShortcutsPosition;
		  toggleFontSizeInput();
		  toggleSearchOptions();
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
			console.info('userHighlightingEnabled saved in sync');
		});

		//get and save the value of the checkbox
		var userFontSizeEnabled = document.getElementById("user-font-size-enabled").checked;
		chrome.storage.sync.set({ "userFontSizeEnabled" : userFontSizeEnabled }, function() {
			if (!chrome.runtime.error) { //if there isnt an error
				console.info('userFontSizeEnabled saved in sync');
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
			console.info('userFontSizeValue saved in sync');
		});

		//get and save the value of the shortcut checkbox
		var userShortcutsEnabled = document.getElementById("user-shortcuts-enabled").checked;
		chrome.storage.sync.set({ "userShortcutsEnabled" : userShortcutsEnabled }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userShortcutsEnabled");
			}
			console.info('userShortcutsEnabled saved in sync');
		});

		//get and save the value of the shortcut checkbox
		var userShortcutsSearch = document.getElementById("user-shortcuts-search").checked;
		chrome.storage.sync.set({ "userShortcutsSearch" : userShortcutsSearch }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userShortcutsSearch");
			}
			console.info('userShortcutsSearch saved in sync');
		});

		//get and save the value of the shortcut position select
		var userShortcutsPosition = document.getElementById("user-shortcuts-position").value;
		chrome.storage.sync.set({ "userShortcutsPosition" : userShortcutsPosition }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userShortcutsPosition");
			}
			console.info('userShortcutsPosition saved in sync');
		});
	}
	else {
		//get and save the value of the shortcut checkbox
		var userHighlightingEnabled = document.getElementById("user-highlighting-enabled").checked;
		chrome.storage.local.set({ "userHighlightingEnabled" : userHighlightingEnabled }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userHighlightingEnabled");
			}
			console.info('userHighlightingEnabled saved in local');
		});

		//get and save the value of the checkbox
		var userFontSizeEnabled = document.getElementById("user-font-size-enabled").checked;
		chrome.storage.local.set({ "userFontSizeEnabled" : userFontSizeEnabled }, function() {
			if (!chrome.runtime.error) { //if there isnt an error
				console.info('userFontSizeEnabled saved in local');
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
			console.info('userFontSizeValue saved in local');
		});

		//get and save the value of the shortcut checkbox
		var userShortcutsEnabled = document.getElementById("user-shortcuts-enabled").checked;
		chrome.storage.local.set({ "userShortcutsEnabled" : userShortcutsEnabled }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userShortcutsEnabled");
			}
			console.info('userShortcutsEnabled saved in local');
		});

		//get and save the value of the shortcut checkbox
		var userShortcutsSearch = document.getElementById("user-shortcuts-search").checked;
		chrome.storage.local.set({ "userShortcutsSearch" : userShortcutsSearch }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userShortcutsSearch");
			}
			console.info('userShortcutsSearch saved in local');
		});

		//get and save the value of the shortcut postion select
		var userShortcutsPosition = document.getElementById("user-shortcuts-position").value;
		chrome.storage.local.set({ "userShortcutsPosition" : userShortcutsPosition }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving userShortcutsPosition");
			}
			console.info('userShortcutsPosition saved in local');
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