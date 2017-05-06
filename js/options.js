document.getElementById("user-font-size-enabled").onclick = toggleFontSizeInput;

function toggleFontSizeInput() {
	if (document.getElementById('user-font-size-enabled').checked) {
		document.getElementById('user-font-size-value').disabled = false;
	}
	else {
		document.getElementById('user-font-size-value').disabled = true;
	}
};


document.getElementById('user-shortcuts-enabled').onclick = toggleSearchOptions;
document.getElementById('user-shortcuts-position').onclick = toggleSearchOptions;

function toggleSearchOptions() {
	if (document.getElementById('user-shortcuts-enabled').checked) {
		document.getElementById('user-shortcuts-position').disabled = false;
		if (document.getElementById('user-shortcuts-position').value=='bottom') {
			document.getElementById('user-shortcuts-search').disabled = false;
		}
		else {
			document.getElementById('user-shortcuts-search').disabled = true;			
		}
	}
	else {
		document.getElementById('user-shortcuts-position').disabled = true;
		document.getElementById('user-shortcuts-search').disabled = true;
	}
};
