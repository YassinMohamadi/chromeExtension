chrome.runtime.onInstalled.addListener(function() {
  localStorage.setItem("a", "1");
  localStorage.setItem("pattern", "");
  console.log("first");
  });


/* Received returnSearchInfo message, set badge text with number of results */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  
  if ('returnSearchInfo' == request.message) {
    if (localStorage.getItem("a") == "1") {
    chrome.browserAction.setBadgeText({
      'text': String(request.numResults),
      'tabId': sender.tab.id
    });
  }
}
});
