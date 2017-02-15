$(document).ready(function () {

    // Set Options

    var speed = 500,
        autoswitch = true,
        autoswitch_speed = 4000;

    // Add initial active class
    $('.slide').first().addClass('active');

    // Hide all slides
    $('.slide').hide();

    // Show first slide
    $('.active').show();

    // Next button slide

    $('#next').on('click', function () {
        $('.active').removeClass('active').addClass('oldActive');

        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');

        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    });

    // Prev button slide

    $('#prev').on('click', function () {
        $('.active').removeClass('active').addClass('oldActive');

        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');

        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    });

    if (autoswitch == true) {
        setInterval(function () {

            $('.active').removeClass('active').addClass('oldActive');

            if ($('.oldActive').is(':last-child')) {
                $('.slide').first().addClass('active');
            } else {
                $('.oldActive').next().addClass('active');
            }

            $('.oldActive').removeClass('oldActive');

            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed);
        }, autoswitch_speed);
    }
});

// Autoswitching of slides



/*
    $('.mylink').on('click', function () {

        // Slide Animation
        $('h1').slideToggle(1000);
        
        $('h1').css('font-size', '40px');

    });
*/