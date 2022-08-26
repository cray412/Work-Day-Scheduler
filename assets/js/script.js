var dateTime = moment().format("dddd, MMMM Do, YYYY");
var timeBlockEl = document.getElementsByClassName(".input");
$("#currentDay").text(dateTime);


var changeColor = function () {

    var currentTime = moment().format('HH');
    var timeBlockEl = $(".textarea");

    for (var i = 0 ; i < timeBlockEl.length ; i++) {

        var elementID = timeBlockEl[i].id;
        var manipID = document.getElementById(timeBlockEl[i].id)

        $(timeBlockEl[i].id).removeClass(".present .past .future");

        if (elementID === currentTime) {
            $(manipID).addClass("present");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("past");
        }
    }
}

$(".saveBtn").click(function() {
    eventText = $(this).siblings(".textarea").val();
    eventTime = $(this).siblings(".hour").text();

    localStorage.setItem(eventTime, JSON.stringify(eventText));

});

    var saveEventText = JSON.parse(localStorage.getItem("9AM"));
    $("#09").val("");
    $("#09").val(saveEventText);

    saveEventText = JSON.parse(localStorage.getItem("10AM"));
    $("#10").val("");
    $("#10").val(saveEventText);

    saveEventText = JSON.parse(localStorage.getItem("11AM"));
    $("#11").val("");
    $("#11").val(saveEventText);

    saveEventText = JSON.parse(localStorage.getItem("12AM"));
    $("#12").val("");
    $("#12").val(saveEventText);

    saveEventText = JSON.parse(localStorage.getItem("1PM"));
    $("#13").val("");
    $("#13").val(saveEventText);

    saveEventText = JSON.parse(localStorage.getItem("2PM"));
    $("#14").val("");
    $("#14").val(saveEventText);

    saveEventText = JSON.parse(localStorage.getItem("3PM"));
    $("#15").val("");
    $("#15").val(saveEventText);

    saveEventText = JSON.parse(localStorage.getItem("4PM"));
    $("#16").val("");
    $("#16").val(saveEventText);

    saveEventText = JSON.parse(localStorage.getItem("5PM"));
    $("#17").val("");
    $("#17").val(saveEventText);

changeColor();