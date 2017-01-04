document.getElementById("user-font-size-enabled").onclick = ShowHideFontSizeInput;

function ShowHideFontSizeInput() {
	if (document.getElementById('user-font-size-enabled').checked) {
		document.getElementById('font-size').classList.remove('hidden');
	}
	else {
		document.getElementById('font-size').classList.add('hidden');
	}
};