console.log(moment())
//variables
var userInput = $(".task")
var taskText = ("")
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
//adding date for current day, past day and so on      
//showing time of day
$("#currentDay").text(moment().format('dddd') + ", " + currentTime)
//refreshing current time
//clicking on text block and entering information
// $(".task").on(click, function() {

// })
//change the color of time blocks if it's the current time vs past time vs future
//saving added text to local storage

//function for color change
function timeColor(timeElement, timeInterger) {
    console.log
    timeElement.removeClass("past present future")
    var momentInt = parseInt(moment().format('HH'))
    if (momentInt < timeInterger) {
        timeElement.addClass("future")
    } else if (momentInt > timeInterger) {
        timeElement.addClass("past")
    } else if (momentInt === timeInterger) {
        timeElement.addClass("present")
    }
}

function timeRefresh() {

}

function saveTask() {
    var tempArr = []
    $(".container .row").each(function() {
        var rowTime = $(this).data("time")
        var rowTaskEl = $(this).find("textarea")
        var rowTaskText = rowTaskEl.text()
        tempArr.push({
            [rowTime] : rowTaskText
        })

        timeColor(rowTaskEl, rowTime)
    })
    localStorage.setItem("schedule", JSON.stringify(tempArr))
}

saveTask()
function loadTask() {

}
$(function () {
    loadTask();
    $(".container .row").each(function () {
    var rowTime = this_row.data("time");
    var rowTaskEl = this_row.find("textarea");
    timeColor(rowTaskEl, rowTime);
    });
});