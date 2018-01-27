status.textContent = 'Options saved.';
setTimeout(function() {
  status.textContent = '';
}, 750);
};

/////////////////////////////////////////////////////////////////////

//TODO: storage function which returns local or sync
function useStorageSync () {
	var local;
	chrome.storage.local.get("userPrefSync"), function(result) {
		if (!chrome.runtime.error) {
	  		local=result.userPrefSync;
	  	};
  	};
	//console.info(local);
	//TODO: make this function actually return something so that it can be used by the comment tool
};

//TODO: migrate keys function to load up all the keys in the old storage location and migrate them to the new storage location

//TODO: clean up function to delete all the old unused keys