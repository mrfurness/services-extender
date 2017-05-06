document.getElementById("user-font-size-enabled").onclick = ShowHideFontSizeInput;

function ShowHideFontSizeInput() {
	if (document.getElementById('user-font-size-enabled').checked) {
		document.getElementById('font-size').classList.remove('hidden');
	}
	else {
		document.getElementById('font-size').classList.add('hidden');
	}
};


document.getElementById("user-shortcuts-enabled").onclick = ShowHideSearchOptions;

function ShowHideSearchOptions() {
	if (document.getElementById('user-shortcuts-enabled').checked) {
		document.getElementById('user-shortcuts-search').disabled = false;
		document.getElementById('user-shortcuts-position').disabled = false;
	}
	else {
		document.getElementById('user-shortcuts-search').disabled = true;
		document.getElementById('user-shortcuts-position').disabled = true;
	}
};