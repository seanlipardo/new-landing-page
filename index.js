var range = 375;

if ($(window).width() <= 600) {
    $("#myNav a.link").hide();
    $("a.open-btn").show();

    $("a.open-btn").click(() => {
        $(".sideBar").css("width", "250px");
        $("a.link").show();
    });

    $("a.close-btn").click(() => {
        $(".sideBar").css("width", "0px");
    });
} else {
    $("a.open-btn").hide();
    $("#myNav a.link").show();
    $(".sideBar").hide();
}