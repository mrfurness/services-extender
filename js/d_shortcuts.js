//////// THE ON PAGE MARKUP

//create the bar div
function shortcutBarCreate() {
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
	customerDetails.text = 'Open Customer Details';
	customerDetails.addEventListener("click", openCustomerDetails);

	var customerSearch = document.createElement('a');
	customerSearch.className = 'xtn-button';
	customerSearch.id = 'xtn-customer-search';
	customerSearch.text = 'Open Customer Search';
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
		//console.log(containerDiv);
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