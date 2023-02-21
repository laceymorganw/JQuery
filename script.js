$(document).ready(function () {

    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("img").on({
        mouseenter: function () {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },
        mouseleave: function () {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    $("#panelOne").click(function () {
        $("#belAir").slideToggle("slow");
    });
    $("#panelTwo").click(function () {
        $("#carrera").slideToggle("slow");
    });
    $("#panelThree").click(function () {
        $("#mgb").slideToggle("slow");
    });

});