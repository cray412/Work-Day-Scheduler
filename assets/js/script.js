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

changeColor();