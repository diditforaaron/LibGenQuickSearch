function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: 'doi: Search the paper repository for doi nubmers %s'
  });
}

resetDefaultSuggestion();

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  // Suggestion code will end up here.
});

chrome.omnibox.onInputCancelled.addListener(function() {
  resetDefaultSuggestion();
});

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  navigate("http://libgen.in/scimag/index.php?s=" + text); addHistory(text);
});

