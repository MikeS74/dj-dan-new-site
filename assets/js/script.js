$(document).ready(function () {

    //ORIG FADE IN
    $("#bkgd").hide();
    $("#bio-pg").hide();
    $("#tour-pg").hide();
    $("#gallery-pg").hide();
    $("#music-pg").hide();
    $("#contact-pg").hide();
    $(".home-container").hide();
    $("li").hide();

    setTimeout(function () {
        $(".home-container").fadeIn(2000);
        $("#bkgd").fadeIn(2000);

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

    $("#tour-link").on("click", function () {
        $("#tour-pg").delay("slow").fadeIn(500);
        homeContFadeOut();
    });

    $("#gal-link").on("click", function () {
        $("#gallery-pg").delay("slow").fadeIn(500);
        homeContFadeOut();
    });

    $("#music-link").on("click", function () {
        $("#music-pg").delay("slow").fadeIn(500);
        homeContFadeOut();
    });

    $("#contact-link").on("click", function () {
        $("#contact-pg").delay("slow").fadeIn(500);
        homeContFadeOut();
    });

    //MAIN CLOSE BUTTON FUNCTION
    function mainCloseActions() {
        menuFadeIns();
        $("#bio-pg, #tour-pg, #gallery-pg, #music-pg, #contact-pg").fadeOut(500);
        homeContFadeIn();
    }

    $(".close-button").on("click", function () {
        mainCloseActions();
    });

    $(document).on("keyup", function (e) {
        if (e.keyCode === 27) {
            mainCloseActions();
        }
    });

    $("#instereo-link").on("click", function () {
        window.open("http://instereorecordings.com");
    });

    $("#sdam-link").on("click", function () {
        window.open("http://soundcloud.com/djdanmusic/sd-podcast-ep124");
    });

    $("#merch-link").on("click", function () {
        window.open("http://redbubble.com/people/instereo");
    });

    //TOUR CALENDAR SCRIPT
        $.getScript( "//widget.songkick.com/306806/widget.js" )
  .done(function( script, textStatus ) {
    console.log( "Songkick Script Loaded!" );
  })
  .fail(function( jqxhr, settings, exception ) {
    console.log("FAILED");
//    $( "div.log" ).text( "Triggered ajaxError handler." );
    
});
    //////////////////////
});