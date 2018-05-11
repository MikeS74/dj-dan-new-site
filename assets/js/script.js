$(document).ready(function () {

    //ORIG FADE IN
    $("#bio-pg").hide();
    $(".home-container").hide().delay("slow").fadeIn(2000);

    //ON CLICKS
    $("#bio-link").on("click", function () {
        $("#bio-pg").delay("slow").fadeIn(500);
        $(".home-container").fadeOut(500);
    });

    $(".close-button").on("click", function () {
        $("#bio-pg").fadeOut(500);
        $(".home-container").delay("slow").fadeIn(500);
    });
});