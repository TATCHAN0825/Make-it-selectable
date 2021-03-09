//タブ単位のスクリプト

//リクエストを受け取った時(backgroundから)
chrome.extension.onMessage.addListener(function (request) {
    switch (request.type) {
        case "css":
            var css = '* { user-select: auto !important; }';
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            head.appendChild(style);
            style.appendChild(document.createTextNode(css));
            break;
        case "reload":
            window.location.reload();
            break;
    }
});