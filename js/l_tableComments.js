function prepDataTables() {
	theContainer = document.getElementsByClassName("Container"); 
	theContainer[0].setAttribute("style","width: 100%;"); 
	theBodyWrapper = document.getElementsByClassName("body-wrapper"); 
	theBodyWrapper[0].setAttribute("style","padding-left: 130px; padding-right: 130px;"); 
	//var pageWidth = document.documentElement.clientWidth; 
	//var tableWidth = pageWidth-30; 
	theTables = document.getElementsByClassName("table"); 
	numberOfTables = theTables.length; 
	for (tableCount = 0; tableCount < numberOfTables; tableCount++) { 
		theTable = theTables[tableCount];
		theTable.removeAttribute("style");//remove the fixed width
		//add the text header to the first row
		headerCell = document.createElement("th");
		headerCell.textContent = "User Comment";
		theTable.rows[0].appendChild(headerCell);
		numberOfRows = theTable.rows.length; 
		for (rowCount = 1; rowCount < numberOfRows; rowCount++) { //start the loop from 1, the first data row after the heading
			theRow = theTable.rows[rowCount];
			if (theRow.cells.length>1) {
				theId = theRow.cells[1].textContent;
				console.info(theId);
				//comment = localStorage.getItem(incident); //retrieve the comment from storage
				cell = document.createElement("td"); 
				cell.id="xtn-"+theId; 
				cell.className="xtn-comment"; 
				//cell.textContent=comment; 
				cell.setAttribute("style","white-space: normal;"); 
				theRow.appendChild(cell); 
				//TODO: come up with a per-row button to edit comment
			}
		} 
	}
};

function loadComments(){

};

function setComment() {

};