/////CONTROLLER TO CALL THE REQUIRED SUB-FUNCTIONS/////

function pageCtrl(result) {
	//console.info(result);
	if (result.userFontSizeEnabled) {
		fontSize(result.userFontSizeValue);
	};

	if (result.userShortcutsEnabled) {
		shortcutBarCreate();
		if (result.userShortcutsSearch) {
			addVistaSearchBox();
		};
	};

};