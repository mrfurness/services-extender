function tableWidth() {
	//get tables
	tableArray = document.getElementsByClassName('dataTable');

	var tableCount = tableArray.length;
	//loop over all tables
	var tableNumber = tableArray.length; for (var tableCount = 0; tableCount < tableNumber; tableCount++) {
		//set table width to wider
		//tableArray[tableCount].style.width = '944px';
		//tableArray[tableCount].style.tableLayout = 'fixed';
		
		table = tableArray[tableCount];

	/*\	
	|*|	headerCells = table.getElementsByTagName('TH');
	|*|	var headerCellCount = headerCells.length;
	|*|	//loop through
	|*|	for (var countTH = 0; countTH < headerCellCount; countTH++) {
	|*|		//remove padding-right
	|*|		headerCells[countTH].style.padding = '5px';
	|*|		//remove width
	|*|		headerCells[countTH].style.width = null;
	|*|	}
	\*/

		tbody = table.getElementsByTagName('tbody');
		rows = tbody[0].getElementsByTagName('TR');
		numberOfRows = rows.length;
		for (rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
			theRow = rows[rowNumber];
			//find body cells
			bodyCells = theRow.getElementsByTagName('TD');
			var numberOfBodyCells = bodyCells.length;
			//loop through the cells
			for (var theCell = 0; theCell < numberOfBodyCells; theCell++) {
				//get inner div
				innerDiv = bodyCells[theCell].getElementsByTagName('DIV');
				theObj = innerDiv[0];
				//console.log(theObj.style.width);
				theWidth = parseInt(theObj.style.width, 10) + 20;
				newWidth = theWidth + 'px';
				//console.log(newWidth);
				theObj.style.width = newWidth;
			}
		}
		
	};
};