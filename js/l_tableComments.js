var masterList = new Object();

function prepDataTables() {
	//add a class to the body to drive the injected CSS
	theBody = document.getElementsByTagName("Body");
	theBody[0].classList.add('extn-tablecomments');
	//define the management object
	var keyManager;
	//find all tables
	theTables = document.getElementsByClassName("table");
	numberOfTables = theTables.length; 
	for (tableCount = 0; tableCount < numberOfTables; tableCount++) {
		theTable = theTables[tableCount];
		//check if this table has already been updated
		if (!theTable.classList.contains("extn-tablecomments")) {
			//remove the fixed width
			theTable.removeAttribute("style");
			//find heading row
			theHeading = theTable.rows[0];
			//add a fixed width to the priority column
			priorityHeader = theHeading.getElementsByTagName("th");
			priorityHeader = priorityHeader[priorityHeader.length-1];
			priorityHeader.style.width = "20px";
			priorityHeader.textContent = "P";
			//prepare the new header cell
			commentHeader = document.createElement("th");
			commentHeader.textContent = "User Comment";
			theHeading.appendChild(commentHeader);
			//find all rows and start a loop
			theRows = theTable.rows;
			numberOfRows = theRows.length;
			for (rowCount = 1; rowCount < numberOfRows; rowCount++) {
				//find the incident number
				let theRow = theRows[rowCount];
				let incidentNumber = theRow.cells[1].textContent;
				chrome.storage.local.get([incidentNumber], function(result) {
					if (!chrome.runtime.error) {
						console.info(result);

						//updateCommentTimestamp(incidentNumber);

						//create the edit button
						theEditButton = document.createElement("td");
						//theEditButton.textContent="Edit";
						theEditButton.classList.add("extn-editbutton");
						theEditButton.id="extn-"+incidentNumber; 
						theEditButton.setAttribute("title","Edit Comment");
						//add click listener to each button
						theEditButton.addEventListener("click", function(){
							theId = theEditButton.id;
							editComment(incidentNumber); 
						}, false);
						//create the text block
						theText = document.createElement("td");
						theText.id="extn-"+incidentNumber;
						theText.classList.add("extn-commenttext");
						//lookup the incident number for any comments, add comment to text block if exists
						/*if(localStorage.getItem(incidentNumber)) {
							console.info(incidentNumber);
							theText.textContent=localStorage.getItem(incidentNumber); 
						}*/
						//console.log(incidentNumber);
						//theText.textContent=loadComment(incidentNumber);

				  		//return comment=result.incidentNumber;
						theText.textContent=result.incidentNumber;

						//append the cell to the row and iterate
						//create the cell
						theCell = document.createElement("td");
						theCellTable = document.createElement("table");
						theCell.className="extn-comment";
						theCellRow = document.createElement("tr");
						theCellRow.appendChild(theEditButton);
						theCellRow.appendChild(theText);
						theCellTable.appendChild(theCellRow);
						theCell.appendChild(theCellTable);
						theRow.appendChild(theCell); 
				  	}
					else {
						console.log("Error loading data from Chrome Sync");
					};
			  	});
			}
			//leave a marker on the table
			theTable.classList.add("extn-tablecomments");
		}
	}
};

/*
function loadComment(incidentNumber){
	console.info(incidentNumber);
	chrome.storage.local.get({incidentNumber: "defaultValue"}, function(result) {
		if (!chrome.runtime.error) {
			console.info(result);
	  		return comment=result.incidentNumber;
	  	}
		else {
			console.log("Error loading data from Chrome Sync");
		};
  	});
};
*/

//add reload comments icon to listing view to handle edits from other tabs

function editComment(incidentNumber) {
	console.info(incidentNumber);
	//create modal
	let theModal = document.createElement("div");
	theModal.setAttribute("id","extn-modal");
	theHeading = document.createElement("h2");
	theHeading.textContent=incidentNumber;
	theHeading.id = "extn-incidentheading";
	theComment = document.createElement("textarea");
	theComment.setAttribute("cols","80");
	theComment.setAttribute("rows","4");
	theComment.id = "extn-commentarea";
	buttonCancel = document.createElement("a");
	buttonCancel.textContent = "Cancel";
	buttonCancel.addEventListener("click",closeModal);
	buttonSave = document.createElement("a");
	buttonSave.textContent = "Save";
	buttonSave.className = "extn-save";
	buttonSave.addEventListener("click",saveComment);
	//load existing comment
	//TODO: Convert this to Chrome Storage
	//console.log(incidentNumber.toString());
	/*var incNum = String(incidentNumber);
	console.log(incNum);*/
	/*theCommentValue = loadComment(incidentNumber);
	if (theCommentValue) {
		console.info(theComment.value);
		theComment.value = loadComment(incidentNumber);
	};*/
	chrome.storage.local.get({[incidentNumber]:"empty"}, function(result) {
		if (!chrome.runtime.error) {
			console.info(incidentNumber);
			console.info(result);
			//var inc = String(incidentNumber);
			console.info(result[incidentNumber]);
			loadedComment = result[incidentNumber];
			if (loadedComment !== "empty") {
				theComment.value = result[incidentNumber]; //does this work given it's async?
			};
			//assemble modal
			theModal.appendChild(theHeading);
			theModal.appendChild(theComment);
			theModal.appendChild(buttonCancel);
			theModal.appendChild(buttonSave);
			//put modal on screen
			theModalWrapper = document.createElement("div");
			theModalWrapper.setAttribute("id","extn-modalwrapper");
			theModalWrapper.appendChild(theModal);
			document.getElementsByTagName("body")[0].appendChild(theModalWrapper);
	  	}
		else {
			console.log("Error loading data from Chrome Sync");
		};
  	});
	//
	/*if (localStorage.getItem(incidentNumber)) {
		theComment.value = localStorage.getItem(incidentNumber);
	};*/

};

function saveComment() {
	//get incidnt number and comment from modal
	theIncident = document.getElementById("extn-incidentheading");
	theIncident = theIncident.textContent;
	theComment = document.getElementById("extn-commentarea");
	theComment = theComment.value;
	//save updates
	console.info(theIncident + " : " + theComment);
	chrome.storage.sync.set({[theIncident] : theComment }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving comment - Incident #" + theIncident);

			}
			console.info("Success saving - Incident #" + theIncident + " | " + theComment);
			chrome.storage.local.get([theIncident], function(result) {
				if (!chrome.runtime.error) {
					console.info(result);
					console.info(result[theIncident]);
			  	}
				else {
					console.log("Error loading data from Chrome Sync");
				};
		  	});
			chrome.storage.local.get("125773", function(result) {
				if (!chrome.runtime.error) {
					console.info(result);
			  	}
				else {
					console.log("Error loading data from Chrome Sync");
				};
		  	});
		});

	//create object
	//var masterList = new Object(); //^now at the top of the document^
	//store values
	theTime = new Date();
	masterList[theIncident] = theTime;
	//log them out
	console.log(masterList);
	//save master object
	chrome.storage.sync.set({ "masterList" : masterList }, function() {
			if (chrome.runtime.error) {
				console.log("Error saving masterList");
			}
			console.info("Success saving masterList");
			//close modal
			closeModal();
		});
	//update page
};

function closeModal() {
	document.getElementById("extn-modalwrapper").remove();
};

function updateCommentTimestamp(incidentNumber) {
	//find the incident record in the management object
	//update the last seen timestamp to now
};

//function to keep on top of the comments the user has and remove any for incidents which haven't been seen for 30 days
function tidyComments() {
	//TODO: incomplete, just toying with time functions

	//update the management objct
	theTime = new Date();
	//console.log(theTime);
	keyManager = {incidentNumber:theTime};
	//console.log(incidentNumber, keyManager.incidentNumber);
	theOldTime = theTime.getTime();
	theOldTime = theOldTime-2592000000;
	//console.log(theOldTime);
	theOldTime = new Date(theOldTime);
	//console.log(theOldTime);
}

function tableComments(){
	prepDataTables();
};