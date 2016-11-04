//////// THE ON PAGE MARKUP

//create the CSS first
function shortcutBarStyles() {
	var sheet = document.createElement("style");
	sheet.appendChild(document.createTextNode("#xtn-shortcut-bar { background-color: #555; position: fixed; bottom: 0; width: inherit; box-sizing: border-box; font-size: 15px; z-index:9999; }"));
	sheet.appendChild(document.createTextNode(".xtn-button { border: 1px solid; padding: 10px; background-color: #fff; margin:2px; display:inline-block; }"));
	sheet.appendChild(document.createTextNode(".xtn-button:hover { background-color: #000; border-color: #fff; color: #fff; }"));
	sheet.appendChild(document.createTextNode(".float-right { float:right; }"));

	document.head.appendChild(sheet);
};


//create the bar div
function shortcutBarCreate() {
	var theBar = document.createElement('div');
	theBar.id="xtn-shortcut-bar";

	//create the buttons
	var scrollTop = document.createElement('a');
	//scrollTop.href = '#';
	scrollTop.className = 'xtn-button float-right';
	scrollTop.id = 'xtn-scroll-top';
	scrollTop.text = '\u2191 Scroll to Top \u2191';
	scrollTop.addEventListener("click", goScrollTop);

	var scrollBottom = document.createElement('a');
	//scrollBottom.href = '#';
	scrollBottom.className = 'xtn-button float-right';
	scrollBottom.id = 'xtn-scroll-bottom';
	scrollBottom.text = '\u2193 Scroll to Bottom \u2193';
	scrollBottom.addEventListener("click", goScrollBottom);

	var customerDetails = document.createElement('a');
	//customerDetails.href = '#';
	customerDetails.className = 'xtn-button';
	customerDetails.id = 'xtn-customer-details';
	customerDetails.text = 'Customer Details';
	customerDetails.addEventListener("click", openCustomerDetails);

	var customerSearch = document.createElement('a');
	customerSearch.className = 'xtn-button';
	customerSearch.id = 'xtn-customer-search';
	customerSearch.text = 'Customer Incident Search';
	customerSearch.addEventListener("click", openCustomerSearch);


	theBar.appendChild(customerDetails);
	theBar.appendChild(customerSearch);
	theBar.appendChild(scrollBottom);
	theBar.appendChild(scrollTop);


	//append to div.Container
	containerDiv = document.getElementsByClassName("Container");
	if (containerDiv.length == 1) {
		containerDiv[0].appendChild(theBar);
	}
	else {
		console.log('too many Container DIVs');
		console.log(containerDiv);
	}
};


///////// THE ACTION FUNCTIONS
//customer deets
function openCustomerDetails() {
	var detailsLink = document.getElementById('CustomerSupportDetails').href;
	window.open(detailsLink,'_blank');
};

//customer search
function openCustomerSearch() {
	var custId = document.getElementById('SelectedEntityId').value;
	var searchLink = 'https://support.vista.co/mvc/services/incidents/Index?loadDefaults=false&searchTerm=&WorkItemCategory=Incident&SortColumn=&SortOrder=&IncludeVeezi=false&SelectedBusinessPartner=-1&SelectedStaffAssigned=-1&SelectedVistaTeam=-1&FoundFrom=&FoundTo=&SelectedStatus=-3&ClosedFrom=&ClosedTo=&SelectedSeverity=-1&UpdatedFrom=&UpdatedTo=&SearchText=&SelectedVersion=-1&BillingStatus=ShowAll&SolutionDueIn=-1&SelectedProduct=-1&SelectedReportedBy=-1&IsChargeable=&ShowWorkItemsCurrentlyWatching=false&SelectedEntityId=';
	searchLink = searchLink+custId;
	window.open(searchLink,'_blank');
};

//scroll top
function goScrollTop() {
	var heading = document.getElementsByTagName('H1')[0];
	heading.scrollIntoView('alignToTop');
};

//scroll bottom
function goScrollBottom() {
	var updates = document.getElementsByClassName('HistoryListItem');
	var length = updates.length - 1;
	var lastUpdate = updates[length]; lastUpdate.scrollIntoView('alignToTop');
};



////////// TRIGGER IF ENABLED
chrome.storage.local.get("userPrefSync", function(prefSync) {
	if (!chrome.runtime.error) {
		loadShortcutEnabled(prefSync.userPrefSync);
		//console.log("Loading Prefs");
	}
	else {
		//console.log("error");
	}
});

function loadShortcutEnabled(userPrefSync) {
	if (userPrefSync) {
		chrome.storage.sync.get("userShortcutsEnabled", function(result) {
			if (!chrome.runtime.error) {
				if (result.userShortcutsEnabled) {
					shortcutBarStyles();
					shortcutBarCreate();
				}
			}
			else {
				//console.log("error");
			}
		});
	}
	else {
		chrome.storage.local.get("userShortcutsEnabled", function(result) {
			if (!chrome.runtime.error) {
				if (result.userShortcutsEnabled) {
					shortcutBarStyles();
					shortcutBarCreate();
				}
			}
			else {
				//console.log("error");
			}
		});
	}
}