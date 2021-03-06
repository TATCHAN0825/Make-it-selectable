let flg = false;
chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {

    if (request == "Action") {
        flg = !flg;
        if (flg) {
            var css = '* { user-select: auto !important; }';
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            head.appendChild(style);
            style.appendChild(document.createTextNode(css));
            let body = $("body");
            let div = $("div");
            const array = ["onMouseDown", "onSelectStart", "onCopy", "unselectable"];
            $('*').each(function (index, element) {
                let jqelement = $(element);
                array.forEach(function (value) {
                    if (jqelement.attr(value)) {//value 属性があるか
                        jqelement.removeAttr(value);
                    }
                });

            });
        } else {
            location.reload();
        }
    }
});