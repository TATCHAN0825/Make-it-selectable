//ブラウザ単位のスクリプト

//有効タブの初期化
let enabledTabs = [];

//有効であるか
function isEnabled(tabId) {
    return enabledTabs[tabId] ?? false;
}

//有効/無効にする
function setEnabled(tabId, enabled) {
    enabledTabs[tabId] = enabled;
}

//アイコンを設定する
function setIcon(state) {
    chrome.browserAction.setIcon({path: state ? "icons/copypaste_on.png" : "icons/copypaste_off.png"});
}

//javascriptの許可を設定する
function setAllowJavascript(allow) {
    chrome.contentSettings.javascript.set({
        primaryPattern: '<all_urls>',
        setting: allow ? "allow" : "block"
    });
}

//ページが読み込まれた時
chrome.webNavigation.onCompleted.addListener(function (details) {
    if (isEnabled(details.tabId)) {
        chrome.tabs.sendMessage(details.tabId, {type: "css"});
    }
});

//アイコンがクリックされた時
chrome.browserAction.onClicked.addListener(function (tab) {
    setEnabled(tab.id, !isEnabled(tab.id));
    setIcon(isEnabled(tab.id));
    setAllowJavascript(!isEnabled(tab.id));
    chrome.tabs.sendMessage(tab.id, {type: "reload"});
});

//タブが変更された時
chrome.tabs.onActivated.addListener(function (activeInfo) {
    setIcon(isEnabled(activeInfo.tabId));
    setAllowJavascript(!isEnabled(activeInfo.tabId));
});