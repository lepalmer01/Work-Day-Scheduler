$(function () {

    var currentHour = dayjs().hour();
    
    var rightNow = dayjs().format('dddd D MMMM, YYYY');
    $("#currentDay").text(rightNow);

/* add event listener to save button*/
    $(".saveBtn").on("click", function () {
        var hour = $(this).parent().attr("id")
        var text = $(this).siblings(".description").val()
        console.log(hour, text)
        localStorage.setItem(hour, text)

    })
/* Retrieve previously saved data from local Storage to display on the screen*/
    $("hour-9 .description").val(localStorage.getItem("hour-9"))
    $("hour-10 .description").val(localStorage.getItem("hour-10"))
    $("hour-11 .description").val(localStorage.getItem("hour-11"))
    $("hour-12 .description").val(localStorage.getItem("hour-12"))
    $("hour-13 .description").val(localStorage.getItem("hour-13"))
    $("hour-14 .description").val(localStorage.getItem("hour-14"))
    $("hour-15 .description").val(localStorage.getItem("hour-15"))
    $("hour-16 .description").val(localStorage.getItem("hour-16"))
    $("hour-17 .description").val(localStorage.getItem("hour-17"))

/*Dynamically style time-blocks based on current time*/    
$('.time-block').each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1])

    if (timeBlockHour < currentHour) {
        $(this).addClass('past');

    } else if (timeBlockHour ===currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');

    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future')
    }
})
})
