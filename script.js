let flg = false;
chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {

    if (request == "Action") {
        flg = !flg;
        if (flg) {
            location.reload();
            var css = '* { user-select: auto !important; }';
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            head.appendChild(style);
            style.appendChild(document.createTextNode(css));
        } else {
            location.reload();
        }
    }
});