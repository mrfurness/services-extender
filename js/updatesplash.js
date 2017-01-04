function showUpdateSplash() {
	var splashStyles = document.createElement("style");
	splashStyles.appendChild(document.createTextNode("#xtn-update-shield { width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.8); position: fixed; top: 0; left: 0; z-index: 998; }"));
	splashStyles.appendChild(document.createTextNode("#xtn-update-splash { background-image: url('data:image/png;base64,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'); }"));
	splashStyles.appendChild(document.createTextNode("#xtn-update-splash { position: fixed; top: 30%; left: 50%; border-radius: 6px; padding: 10px 30px 30px; width: 500px; font-size:16px; font-family: 'Segoe UI', sans-serif; margin-left: -250px; background-color: #fff; border: 2px solid #333; z-index: 999; box-shadow: 0px 0px 10px #ddd; background-position: top right; background-repeat: no-repeat; }"));
	splashStyles.appendChild(document.createTextNode("#xtn-update-splash h1 { padding-bottom: 0; }"));
	splashStyles.appendChild(document.createTextNode("#xtn-update-splash span { margin-top: 10px; border:1px solid #000; padding:4px 6px 5px; background-color:#ddd; float:left; border-radius:3px; }"));
	splashStyles.appendChild(document.createTextNode("#xtn-update-splash span:hover { cursor:pointer; background-color: #444; color:#eee; }"));
	splashStyles.appendChild(document.createTextNode("span#xtn-splash-never { float: right; background-color: #444; color:#eee; }"));
	splashStyles.appendChild(document.createTextNode("span#xtn-splash-never:hover { float: right; cursor:pointer; background-color: #ddd; color:#333; }"));
	document.head.appendChild(splashStyles);

	var theShield = document.createElement('div');
	theShield.id = "xtn-update-shield";

	var theSplash = document.createElement('div');
	theSplash.id = "xtn-update-splash";

	var updateHeading = document.createElement('h1');
	updateHeading.textContent = 'New Year, new features!';

	var updateText = document.createElement('p');
	updateText.textContent = "While the majority of this update is behind the scenes (and will help me to add new features more quickly) it does bring one new feature. You can now enable colour highlighting of high priority incidents on the incident listing page. (v1.2.0)";

	var closeButton = document.createElement('span');
	closeButton.id = 'xtn-splash-close';
	closeButton.textContent = 'Close one time';
	closeButton.addEventListener("click", closeSplash);

	var neverButton = document.createElement('span');
	neverButton.id = 'xtn-splash-never';
	neverButton.textContent = "Don't show again for this version";
	neverButton.addEventListener("click", neverSplash);

	theSplash.appendChild(updateHeading);
	theSplash.appendChild(updateText);
	theSplash.appendChild(closeButton);
	theSplash.appendChild(neverButton);

	theShield.appendChild(theSplash);

	theBody = document.getElementsByTagName("body");
	if (theBody.length == 1) {
		theBody[0].appendChild(theShield);
	}
	else {
		console.log('too many Bodys');
		console.log(theBody);
	}

};

var thisVersion = 120;

chrome.storage.local.get('neverSplashThisVersion', function(result) {
	if (!chrome.runtime.error) {
		console.info(result.neverSplashThisVersion);
		if (result.neverSplashThisVersion >= thisVersion) {
		}
		else {
			showUpdateSplash();
		}
	}
	else {
		console.log("Error loading data from Chrome Sync");
	}
});

function closeSplash() {
	//console.log('Close');
	document.getElementById('xtn-update-shield').remove();
	//chrome.storage.local.clear();
}

function neverSplash() {
	closeSplash();
	//console.log('Never');

	var neverSplashThisVersion = thisVersion;
	chrome.storage.local.set({ "neverSplashThisVersion" : neverSplashThisVersion }, function() {
		if (chrome.runtime.error) {
			console.log("Error saving neverSplashThisVersion");
		}
		//console.log('saved in local - ' + neverSplashThisVersion);
	});
}