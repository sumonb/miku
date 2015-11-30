//chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//    if (changeInfo.status == 'complete' && tab.active) {

      
//    }
//})


var loadFlag = 0;
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "refresh_page" }, function (response) {
           
        });
    });

});