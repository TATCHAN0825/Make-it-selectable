chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, "Action");
	if (localStorage['icon'] === undefined) {
		localStorage['icon'] = 'copypaste_off.png';
	}

// 起動時にローカルストレージの値を見てアイコンを設定する。
	chrome.browserAction.setIcon({path:localStorage['icon']});

		if (localStorage['icon'] === 'copypaste_off.png') {
			localStorage['icon'] = 'copypaste_on.png'
		} else {
			localStorage['icon'] = 'copypaste_off.png'
		}

		chrome.browserAction.setIcon({path:localStorage['icon']});
	});