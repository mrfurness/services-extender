function tableWidth() {
	//get tables
	tableArray = document.getElementsByClassName('dataTable');

	//loop over all tables
	var tableNumber = tableArray.length; for (var tableCount = 0; tableCount < tableNumber; tableCount++) {
		
		table = tableArray[tableCount];

		tbody = table.getElementsByTagName('tbody');
		rows = tbody[0].getElementsByTagName('TR');
		numberOfRows = rows.length;
		for (rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
			theRow = rows[rowNumber];
			//find body cells
			bodyCells = theRow.getElementsByTagName('TD');
			var numberOfBodyCells = bodyCells.length;
			if (theRow.classList.contains("extn-expanded")==false) { //check if the row has already been expanded (this is wiped after the AJAX edits)
				//loop through the cells
				for (var theCell = 0; theCell < numberOfBodyCells; theCell++) {
					//get inner div
					innerDivs = bodyCells[theCell].getElementsByTagName('DIV');
					theDiv = innerDivs[0];
					//console.log(theDiv.style.width);
					if (theDiv != undefined) { //this check is needed to prevent errors on cells that don't contain DIV's (like the priority)
						currentWidth = parseInt(theDiv.style.width, 10)
						newWidth = currentWidth + 20; //20px is the width thats removed for the sort icons, we are just claiming it back
						theDiv.style.width = newWidth+'px';
					};
				};
			};
			theRow.classList.add("extn-expanded"); //after we've done our edits, leave the marker so we don't do it twice
		}
		
	};
};