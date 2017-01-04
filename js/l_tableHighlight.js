function tableHighlight() {

	/*\ // STYLES SHIFTED TO CENTRAL CSS FILE
	|*|
	|*|	//create row highlight utility classes
	|*|	highlightStyle = document.createElement("style");
	|*|	highlightStyle.appendChild(document.createTextNode(".extn-p1 { background-color:#ffdec1 !important; } .extn-p2 { background-color:#fffec1 !important; }"));
	|*|	document.head.appendChild(highlightStyle);
	\*/

	//get all the tables
	tables = document.getElementsByClassName('table');
	numberOfTables = tables.length;

	//loop through the tables
	for (var tableNumber = 0; tableNumber < numberOfTables; tableNumber++) {
		//get the table body and then the rows within
		rows = tables[tableNumber].getElementsByTagName('tbody')[0].getElementsByTagName('tr');
		numberOfRows = rows.length;
		//loop through each row, checking if the cell contains p1 or p2
		for (var rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
			//get the cells
			cells = rows[rowNumber].getElementsByTagName('td');
			//get the last cell
			cellNumber = cells.length-1;
			cell = cells[cellNumber];
			//if it innerText is P1 add class
			if (cell.innerText == 'P1') {
				cell.closest('tr').classList.add('extn-p1');
				//console.log('P1');
			}
			// if it is P2 add class
			else if (cell.innerText == 'P2') {
				cell.closest('tr').classList.add('extn-p2');
				//console.log('P2');
			}
			//else do nothing
		}
	};
};