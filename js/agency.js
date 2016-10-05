// Agency Theme JavaScript

$(document).ready( function(){
    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceInLeft",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 4000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    })

    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Language Selector
    $( '#en' ).on( 'click', function(){
        $( '#pt' ).removeClass( 'active' );
        $(this).addClass( 'active' );
        $( '.pt' ).hide();
        $( '.en' ).show( 'slow' );
    });
    $( '#pt' ).on( 'click', function(){
        $( '#en' ).removeClass( 'active' );
        $(this).addClass( 'active' );
        $( '.en' ).hide();
        $( '.pt' ).show( 'slow' );
    });

}); // End of use strict