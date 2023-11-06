$(function () {
    var CurrentHour = dayjs().hour();
    var rightNow = dayjs().format('dddd D MMMM, YYYY');
    $("#currentDay").text(rightNow);

});
