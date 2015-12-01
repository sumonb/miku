
function pageRefresh() {

   
    //$('#hplogo').empty();

    $('#logocont').empty();


    $('<img />')
        .attr('src', "http://shamika.barua.me/miku.jpg")
        .attr('height', "120px")
        .attr('width', "100px")
        .attr('style', "margin-bottom:-120px")
        .attr('alt', "shamika")
        .attr('title', "shamika")
        .prependTo($('#lga'));


    $('<img />')
        .attr('src', "http://shamika.barua.me/miku_small.jpg")
        .appendTo($('#logocont'));

    //$('#hplogo').remove();
}

$(function () {
    pageRefresh();
});



// content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.action == "refresh_page") {

    }

    
});

