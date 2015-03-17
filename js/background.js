// http://developer.chrome.com/extensions/samples.html
// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
  addHistory(sText);
  openDefinitionPage(sText);
};

function openDefinitionPage(sText) {
  var encodedQuery = encodeURIComponent(sText);
  var url = "http://libgen.in/scimag/index.php?s=" + encodedQuery;
  window.open(url, '_blank');
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Search On LibGen";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});
