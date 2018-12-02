$(document).ready(() => {

    $("#mobile-menu").click(() => {
        if($("#nav-list-wrapper:visible").length) {
            $("#nav-list-wrapper").css("display", "none");
        } else {
            $("#nav-list-wrapper").css("display", "block");
            $("#search-bar-wrapper").css("display", "none");

        }
    });

    $("#mobile-search").click(() => {
        if($("#search-bar-wrapper:visible").length) {
            $("#search-bar-wrapper").css("display", "none");
        } else {
            $("#nav-list-wrapper").css("display", "none");
            $("#search-bar-wrapper").css("display", "block");

        }
    });

    $("#lupa").click(() => {
        if($("#search-bar-wrapper:visible").length) {
            $("#search-bar-wrapper").css("display", "none");
        } else {
            $("#search-bar-wrapper").css("display", "block");

        }
    });
});