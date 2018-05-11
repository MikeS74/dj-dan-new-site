$(document).ready(function () {

    //ORIG FADE IN
    $("#bio-pg").hide();
    $(".home-container").hide();
    $("li").hide();

    setTimeout(function () {
        $(".home-container").fadeIn(2000);
    }, 500);
    menuFadeIns();

    //RETURN HOME FUNCTION
    function homeContFadeIn() {
        $(".home-container").delay("slow").fadeIn(500);
    };

    //LEAVE HOME FUNCTION
    function homeContFadeOut() {
        $(".home-container").fadeOut(500);
        setTimeout(function () {
            $("li").hide();
        }, 1000);
    };

    //MENU TEXT FADES
    function menuFadeIns() {
        setTimeout(function () {
            $("#bio-link").fadeIn(500);
        }, 500);
        setTimeout(function () {
            $("#tour-link").fadeIn(500);
        }, 700);
        setTimeout(function () {
            $("#music-link").fadeIn(500);
        }, 900);
        setTimeout(function () {
            $("#gal-link").fadeIn(500);
        }, 1100);

        setTimeout(function () {
            $("#sdam-link").fadeIn(500);
        }, 500);
        setTimeout(function () {
            $("#instereo-link").fadeIn(500);
        }, 700);
        setTimeout(function () {
            $("#merch-link").fadeIn(500);
        }, 900);
        setTimeout(function () {
            $("#contact-link").fadeIn(500);
        }, 1100);
    };

    //ON CLICKS
    $("#bio-link").on("click", function () {
        $("#bio-pg").delay("slow").fadeIn(500);
        homeContFadeOut();
    });

    $(".close-button").on("click", function () {
        menuFadeIns();
        $("#bio-pg").fadeOut(500);
        homeContFadeIn();
    });
});