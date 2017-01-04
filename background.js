/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */

/*chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    'index.html',
    {
      id: 'mainWindow',
      bounds: {width: 800, height: 600}
    }
  );
});
*/



chrome.webRequest.onBeforeRequest.addListener(function(details) {
 console.log(details);
},{
	urls: [ "https://support.vista.co/mvc/Ajax*" ]
	},['requestBody']
);


chrome.webRequest.onCompleted.addListener(function(details) {
	console.log(details);
	//console.log(details.tabId);
	chrome.tabs.sendMessage(details.tabId, {webRequest:'tableLoaded'});
	},{
	urls: [ "https://support.vista.co/mvc/Ajax*" ]
	},['responseHeaders']
);

//chrome.tabs.sendMessage(integer tabId, any message, object options, function responseCallback);