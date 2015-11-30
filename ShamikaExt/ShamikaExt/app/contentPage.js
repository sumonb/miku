
function pageRefresh() {

   
    $('#hplogo').empty();
    $('#logocont').empty();


    $('<img />')
        .attr('src', "http://shamika.barua.me/miku.jpg")
        .attr('height', "200px")
        .attr('width', "150px")
        .appendTo($('#hplogo'));


    $('<img />')
        .attr('src', "http://shamika.barua.me/miku_small.jpg")
        .appendTo($('#logocont'));

    //$('#hplogo').show();
}

$(function () {
    pageRefresh();
});



// content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.action == "refresh_page") {

    }

    
});

