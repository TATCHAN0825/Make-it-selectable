chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, "Action");
	if (localStorage['icon'] === undefined) {
		localStorage['icon'] = 'icons/copypaste_off.png';
	}

// 起動時にローカルストレージの値を見てアイコンを設定する。
	chrome.browserAction.setIcon({path:localStorage['icon']});

		if (localStorage['icon'] === 'icons/copypaste_off.png') {
			localStorage['icon'] = 'icons/copypaste_on.png'
		} else {
			localStorage['icon'] = 'icons/copypaste_off.png'
		}

		chrome.browserAction.setIcon({path:localStorage['icon']});
	if(localStorage['icon'] === "icons/copypaste_on.png") {
		chrome.contentSettings.javascript.set({
			primaryPattern: '<all_urls>',
			setting: 'block'
		});
	}else{
		chrome.contentSettings.javascript.set({
			primaryPattern: '<all_urls>',
			setting: 'allow'
		});

	}


	});