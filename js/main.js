$(document).ready(function() {

  "use strict";
     //slider-carousel
    $('#slider-carousel').carouFredSel({

        responsive: true,
        width:'100%',
        circular: true,
        scroll: {
          items:1,
          duration: 500,
          pauseOnHover: true
        },

        auto:true,

        items: {
          visible: {
            min:1,
            max:1
          },

          height: "variable"
        },

        pagination: {
          container:".sliderpager",
          anchorBuilder: false
        }

    });
    //portfolio-carousel
    $('.portfolio-carousel').carouFredSel({

        responsive: true,
        width:'100%',
        circular: true,
        prev:'#prev',
        next:'#next',
        scroll: {
          items:1,
          duration: 500,
          pauseOnHover: true
        },

        auto:true,

        items: {
          visible: {
            min:1,
            max:4
          },

          height: "variable"
        }

    });

    //Team-carousel
    $('.team-carousel').carouFredSel({

        responsive: true,
        width:'100%',
        circular: true,
        prev:'#team-prev',
        next:'#team-next',
        scroll: {
          items:1,
          duration: 500,
          pauseOnHover: true
        },

        auto:true,

        items: {
          visible: {
            min:1,
            max:4
          },

          height: "variable"
        }

    });

    //testimonials
    $('.testimonials-carousel').carouFredSel({

        responsive: true,
        width:'100%',
        circular: true,
        scroll: {
          items:1,
          duration: 500,
          pauseOnHover: true
        },

        auto:true,

        items: {
          visible: {
            min:1,
            max:1
          },

          height: "variable"
        },

        pagination: {
          container:".testipager",
          anchorBuilder: false
        }
    });


    //Header Scroll
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if(top >= 60) {
          $("header").addClass('secondary-dark-blue-bg');

        } else
            if($("header").addClass('secondary-dark-blue-bg')) {
              $("header").removeClass('secondary-dark-blue-bg');
            }
    });

    //Slick Nav implementation
    $('#menu').slicknav({
       label: '',
    });

    //parallax scrolling
    $('#main').stellar();

    //waypoints

    $('.animation').each(function () {

      var waypoint = new Waypoint({
        element: this,
        handler: function(direction) {
          var animation = $(this.element).attr('data-animation');
          $(this.element).css('opacity', '1');
          $(this.element).addClass("animated " + animation);
      },
        offset: '75%'
      })

    });

    //Smooth Scoll
    $('a').smoothScroll();
});
