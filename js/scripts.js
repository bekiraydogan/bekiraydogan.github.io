
//Header Animation
$(document).scroll(function() {
if ($(document).scrollTop() >= 50) {
    $('#topnav').addClass('scrolled');
    $('.navbar-nav').addClass('scrolled');
    $('.navbar-brand').addClass('scrolled');
    
} else {
    $('#topnav').removeClass('scrolled');
    $('.navbar-nav').removeClass('scrolled');
    $('.navbar-brand').removeClass('scrolled');
}
});


$('.anchor').click(function(e){
    // If a link has been clicked, scroll the page to the link's hash target:
    $.scrollTo( this.hash || 0, 1000);
    e.preventDefault();
});	

$(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 500) {
            $(".skill li span.one").addClass("html");
            $(".skill li span.two").addClass("css");
            $(".skill li span.three").addClass("bootstrap");
            $(".skill li span.four").addClass("javascript");
            $(".skill li span.five").addClass("aspnet");
            $(".skill li span.six").addClass("sql");
            $(".skill li span.seven").addClass("entity");
            $(".skill li span.eight").addClass("oracle");
            $(".skill li span.nine").addClass("devexpress");
        }
    });
});

$(document).ready(function() {
     $("#owl-carousel").owlCarousel({
        items : 4,
         autoPlay: 5000,
         itemsCustom : [
            [450, 1],
            [600, 1],
            [700, 2],
            [1000, 3],
            [1200, 3],
            [1400, 3],
            [1600, 3]
          ]
    })
});