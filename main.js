// Author: Praveen Kumar
// Email: praveenk.vishwanatha@gmail.com

searchOnlineDict = function(info, tab) {
    var query = info.selectionText,
        w = 600,
        h = 400,
        left = (screen.width / 2) - (500 / 2),
        top = (screen.height / 2) - (500 / 2);

    switch (info.menuItemId) {
        case "1":
            url = "http://www.thefreedictionary.com/" + query;
            break;
        case "2":
            url = "http://www.urbandictionary.com/define.php?term=" + query;
            break;
        case "3":
            url = "http://www.dictionary.com/browse/" + query + "?s=t";
            break;
        case "4":
            url = "http://www.merriam-webster.com/dictionary/" + query;
            break;
        case "5":
            url = "https://www.google.com/#q=" + query + "%20definition";
            break;
        case "6":
            url = "http://www.collinsdictionary.com/dictionary/english/" + query;
            break;
        case "7":
            url = "http://www.thesaurus.com/browse/" + query;
            break;
        case "8":
            url = "https://en.wiktionary.org/wiki/" + query;
            break;
        default:
            url = "http://www.thefreedictionary.com/" + query;
    }

    window.open(url, 'Lookup online directories', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
};

chrome.contextMenus.create({
    id: "1",
    title: "The Free Dictionary",
    type: "normal",
    contexts: ["selection"],
    onclick: searchOnlineDict
});

chrome.contextMenus.create({
    id: "2",
    title: "Urban Dictionary",
    type: "normal",
    contexts: ["selection"],
    onclick: searchOnlineDict
});

chrome.contextMenus.create({
    id: "3",
    title: "Dictionary",
    type: "normal",
    contexts: ["selection"],
    onclick: searchOnlineDict
});

chrome.contextMenus.create({
    id: "4",
    title: "Merriam-Webster",
    type: "normal",
    contexts: ["selection"],
    onclick: searchOnlineDict
});

chrome.contextMenus.create({
    id: "5",
    title: "Google definition",
    type: "normal",
    contexts: ["selection"],
    onclick: searchOnlineDict
});

chrome.contextMenus.create({
    id: "6",
    title: "Collins Dictionary",
    type: "normal",
    contexts: ["selection"],
    onclick: searchOnlineDict
});

chrome.contextMenus.create({
    id: "7",
    title: "Thesaurus",
    type: "normal",
    contexts: ["selection"],
    onclick: searchOnlineDict
});

chrome.contextMenus.create({
    id: "8",
    title: "Wiktionary",
    type: "normal",
    contexts: ["selection"],
    onclick: searchOnlineDict
});