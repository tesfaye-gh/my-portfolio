/*
    Template: Profile - Responsive One Page Resume/CV/Portfolio
    Author: PerfectPixelWeb
    Version: 1.0
*/

(function($) {
    "use strict";


    /*
     * ----------------------------------------------------------------------------------------
     *  Typed JS
     * ----------------------------------------------------------------------------------------
     */
    Typed.new('#typed', {
        stringsElement: document.getElementById('typed-strings'),
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        backDelay: 1000
    });

    /*
     * ----------------------------------------------------------------------------------------
     *  Preloader JS
     * ----------------------------------------------------------------------------------------
     */
    jQuery(".preloader-area").fadeOut(500);
    
    /*
     * ----------------------------------------------------------------------------------------
     *  Chart JS
     * ----------------------------------------------------------------------------------------
     */

    //var windowBottom = $(window).height();
    var $chart = $('.chart');
    var index = 0;
    $(document).on('scroll', function() {
        var top = $('.skills').height() - $(window).scrollTop();
        console.log(top)
        if (top < -600) {
            if (index === 0) {

                $chart.easyPieChart({
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });

            }
            index++;
        }
    })

    /*-----------------------
      Chart loading JS
     -------------------------*/

    var chart = window.chart = $chart.data('easyPieChart');
    $('.js_update').on('click', function() {
        chart.update(Math.random() * 100);
    });

    /*
     * ----------------------------------------------------------------------------------------
     *  Smooth Scroll JS
     * ----------------------------------------------------------------------------------------
     */

    $('a.page-scroll').on("click", function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    /*
     * ----------------------------------------------------------------------------------------
     *  Extra JS
     * ----------------------------------------------------------------------------------------
     */
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    /*
     * ----------------------------------------------------------------------------------------
     *  Wow JS
     * ----------------------------------------------------------------------------------------
     */
    new WOW().init();


    /*
     * ----------------------------------------------------------------------------------------
     *  Counter Up JS
     * ----------------------------------------------------------------------------------------
     */

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*
     * ----------------------------------------------------------------------------------------
     *  Client JS
     * ----------------------------------------------------------------------------------------
     */

    $(".client-logo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 6,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination: false
    });

})(jQuery);