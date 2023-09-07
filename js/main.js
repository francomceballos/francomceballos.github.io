(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

function cambiarIdioma(idioma) {
    const contenido = {
        es: {
            saludo: "¡Hola! Soy Franco Ceballos, un desarrollador Full Stack en proceso de aprendizaje y crecimiento en el emocionante mundo de la programación." ,         
            parrafo1: "Mi pasión por la tecnología y el desarrollo de software me ha llevado a embarcarme en esta carrera para convertirme en un experto en la construcción de aplicaciones web y soluciones innovadoras." ,
            parrafo2: "Desde que empecé mi viaje como desarrollador, he estado dedicando tiempo y esfuerzo a adquirir un conjunto diverso de habilidades en el desarrollo de aplicaciones web." ,
            parrafo3: "He explorado lenguajes de programación tanto en el lado del cliente como en el servidor, incluyendo HTML, CSS, JavaScript y más. Además, he trabajado con tecnologías populares como React, Node.js y bases de datos SQL." ,
            parrafo4: "¡Gracias por visitar mi página web y estaré encantado de conectarme contigo! Aquí debajo podrás encontrar formas de contactarme." ,
        },
    
        en: {
            saludo:   "Hi! I'm Franco Ceballos, a Full Stack developer in the process of learning and growing in the exciting world of programming.",          
            parrafo1: "My passion for technology and software development has led me to embark on this career to become an expert in building innovative web applications and solutions.",
            parrafo2: "Since I started my journey as a developer, I have been dedicating time and effort to acquire a diverse set of skills in web application development.",
            parrafo3: " I have explored both client-side and server-side programming languages, including HTML, CSS, JavaScript and more. In addition, I've worked with popular technologies such as React, Node.js and SQL databases. ",
            parrafo4: " Thank you for visiting my website and I'd be happy to connect! Below you can find ways to contact me",
        }
    };

    const elementos = document.querySelectorAll("[id]");
    elementos.forEach(elemento => {
        const id = elemento.id;
        if (contenido[idioma] && contenido[idioma][id]) {
            elemento.textContent = contenido[idioma][id];
        }
    });
}

