/////CONTROLLER TO CALL THE REQUIRED SUB-FUNCTIONS/////

function pageCtrl(result) {

	if (result.userFontSizeEnabled) {
		fontSize(result.userFontSizeValue);
	};

	if (result.userShortcutsEnabled) {
		shortcutBarCreate();
	};
};