/////CONTROLLER TO CALL THE REQUIRED SUB-FUNCTIONS/////

function pageCtrl(result) {
	//console.info(result);
	if (result.userFontSizeEnabled) {
		fontSize(result.userFontSizeValue);
	};

	if (result.userShortcutsEnabled) {
		shortcutBarCreate();
		shortcutBarPosition(result.userShortcutsPosition);
		if (result.userShortcutsSearch) {
			addVistaSearchBox();
		};
	};

};