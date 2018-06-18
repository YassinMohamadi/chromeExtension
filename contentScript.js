
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: 'new'}, function() {
        console.log("salam");
      console.log("The color is green.");
    });      
    
  });