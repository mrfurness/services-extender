/////CONTROLLER TO CALL THE REQUIRED SUB-FUNCTIONS/////

function pageCtrl(result) {
	if (result.userHighlightingEnabled) {
		tableHighlight();
		tableWidth();
	};
};