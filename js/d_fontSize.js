// start stylesheet function
function fontSize(userFontSizeValue) {

	// create sheet
	var sheet = document.createElement("style");

	// append style(s)
	// sheet.appendChild(document.createTextNode(".searchResults td{font-size:"+userFontSizeValue+"px;}"))  // REMOVED DUE TO CONFLICTS WITH THE NEW SITE
	sheet.appendChild(document.createTextNode(".HistoryListItemMain div, .HistoryListItemMain p, .HistoryListItemMain li{font-size:"+userFontSizeValue+"px;}"))

	// append sheet to document.head
	document.head.appendChild(sheet);
};