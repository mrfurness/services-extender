//////// THE ON PAGE MARKUP

//create the bar div
function shortcutBarCreate(userPosition) {
	var theBar = document.createElement('div');
	theBar.id="xtn-shortcut-bar";

	//create the buttons
	var scrollTop = document.createElement('a');
	//scrollTop.href = '#';
	scrollTop.className = 'xtn-button float-right';
	scrollTop.id = 'xtn-scroll-top';
	scrollTop.text = '\u2191 Incident Details \u2191';
	scrollTop.addEventListener("click", goScrollTop);

	var scrollBottom = document.createElement('a');
	//scrollBottom.href = '#';
	scrollBottom.className = 'xtn-button float-right';
	scrollBottom.id = 'xtn-scroll-bottom';
	scrollBottom.text = '\u2193 Last Update \u2193';
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
	customerSearch.text = 'Customer Search';
	customerSearch.addEventListener("click", openCustomerSearch);


	theBar.appendChild(customerDetails);
	theBar.appendChild(customerSearch);
	if (userPosition=='bottom') { //we want these buttons in different orders depending on position
		theBar.appendChild(scrollBottom);
		theBar.appendChild(scrollTop);
	}
	else {
		theBar.appendChild(scrollTop);
		theBar.appendChild(scrollBottom);
	};



	//append to div.Container
	containerDiv = document.getElementsByClassName("Container");
	if (containerDiv.length == 1) {
		containerDiv[0].appendChild(theBar);
	}
	else {
		console.log('too many Container DIVs');
		//console.log(containerDiv);
	}
};

function addVistaSearchBox () {
	var searchBox = document.createElement('input');
	searchBox.type = 'text';
	searchBox.placeholder = 'Enter text to Vista Search...';
	searchBox.size = '40';
	searchBox.className = 'xtn-search';
	searchBox.id = 'xtn-search';
	searchBox.addEventListener("keydown", openVistaSearch);
	
	/*var searchButton = document.createElement('a');
	searchButton.className = "xtn-button";
	searchButton.id = 'xtn-search-button';
	searchButton.text = 'Go';
	searchButton.addEventListener("click", openVistaSearch);*/

	shortcutBar = document.getElementById("xtn-shortcut-bar");
	shortcutBar.appendChild(searchBox);

};

function shortcutBarPosition (userPosition) {
	var shortcutBarPosition = userPosition;
	shortcutBar = document.getElementById("xtn-shortcut-bar");
	shortcutBar.className = shortcutBarPosition;
	if (shortcutBarPosition == 'left' || shortcutBarPosition == 'right'){
		shortcutBar.classList.add('floatMenu');
		shortcutBar.classList.add('floatEnabled');
		//if it's going on the left, it needs to sit below the existing menu
		if (shortcutBarPosition == 'left'){
			defaultMenu = document.getElementsByClassName('floatMenu')[0];
			defaultMenuParts = defaultMenu.getElementsByTagName('ul');
			numberOfDefaultMenuParts = defaultMenuParts.length;
			var defaultMenuHeight = 0;
			for (var countMenuParts = 0; countMenuParts < numberOfDefaultMenuParts; countMenuParts++){
				defaultMenuHeight += defaultMenuParts[countMenuParts].clientHeight;
				defaultMenuHeight += 20; //add extra height to account for the margin between items
			};
			//console.info(defaultMenuHeight);
			shortcutBar.style.marginTop=defaultMenuHeight+'px';
		};
	};
};

function shortcutBarPositionAutoScroll () {
	var shortcutBar;
	var shortcutBarYloc;
	var cx;
	var cy;

	shortcutBar = document.getElementById("xtn-shortcut-bar");
	shortcutBarStyles = window.getComputedStyle(shortcutBar);
	shortcutBarTop = shortcutBarStyles.getPropertyValue('top');
	shortcutBarTopNum = parseInt(shortcutBarTop,10);
	//need to do a calculation to understand the page offset
	shortcutBar.style.top = shortcutBarTopNum + 'px';
	}

	/*$(window).scroll(function() {
	    var n = menuYloc + $(document).scrollTop() + "px";
	    $(name).animate({
	        top: n
	    }, {
	        duration: 500,
	        queue: !1
	    })
	}),
	cx = 0,
	cy = 0,*/
	
	/*$().mousemove(function(n) {
	    cx = n.pageX,
	    cy = n.pageY
	}),*/

//};


///////// THE ACTION FUNCTIONS

//customer deets
function openCustomerDetails() {
	var detailsLink = document.getElementById('CustomerSupportDetails').href;
	window.open(detailsLink,'_blank');
};

//customer search
function openCustomerSearch() {
	var custId = document.getElementById('SelectedEntityId').value;
	var custSearchLink = 'https://support.vista.co/mvc/services/incidents/Index?loadDefaults=false&searchTerm=&WorkItemCategory=Incident&SortColumn=&SortOrder=&IncludeVeezi=false&SelectedBusinessPartner=-1&SelectedStaffAssigned=-1&SelectedVistaTeam=-1&FoundFrom=&FoundTo=&SelectedStatus=-3&ClosedFrom=&ClosedTo=&SelectedSeverity=-1&UpdatedFrom=&UpdatedTo=&SearchText=&SelectedVersion=-1&BillingStatus=ShowAll&SolutionDueIn=-1&SelectedProduct=-1&SelectedReportedBy=-1&IsChargeable=&ShowWorkItemsCurrentlyWatching=false&SelectedEntityId=';
	custSearchLink = custSearchLink+custId;
	window.open(custSearchLink,'_blank');
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

function openVistaSearch(key) {
  if (13 == key.keyCode) {
  	vistaSearchString = document.getElementById('xtn-search').value;
  	vistaSearchLink = 'http://search.vista.co/#q=' + vistaSearchString;
  	console.info(vistaSearchString);
  	window.open(vistaSearchLink,'_blank');
  }
}