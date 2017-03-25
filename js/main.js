/*
 * Funcion para manejar el menu desplegable
 */
//767

$('div>ul>li>a').click(function(){
    if($(window).width()<768){
        $('#navbar-items').toggle();
    }
});

$('#toggle-navbar').click(function(){
    $('#navbar-items').toggle();
});
$(function(){
 $('#contador').countdown('2017/10/10', function(event) {
    console.log("documento");
    $(this).html(event.strftime('%d days %H:%M:%S'));
  });
});
    /*
 * Change Navbar color while scrolling
 */

    $(window).scroll(function(){
        handleTopNavAnimation();
    });

    $(window).load(function(){
        handleTopNavAnimation();
    });

    function handleTopNavAnimation() {
        var top=$(window).scrollTop();

        if(top>10){
            $('#site-nav').addClass('navbar-solid');
        }
        else{
            $('#site-nav').removeClass('navbar-solid');
        }
    }

    /*
 * SmoothScroll
 */

    smoothScroll.init();
