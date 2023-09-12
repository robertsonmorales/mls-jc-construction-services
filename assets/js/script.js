feather.replace();

function navSelected(id){
    let navbar = document.getElementsByClassName('navbar');
    for (let i = 0; i < navbar.length; i++) {
        if (navbar[i].classList.contains('active')) {
            navbar[i].classList.remove('active');   
        }
    }

    let el = document.getElementById(id);
    if (id == 'hero') {
        document.getElementById('nav-hero').classList.add('active');
        window.scrollTo(0,0);
    }else{
        document.getElementById('nav-'+id).classList.add('active');
        el.scrollIntoView();
    }
}

function visibleToViewport(el){
    var rect = el.getBoundingClientRect();

    return (
        rect.top == 0 &&
        rect.left == 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

$(() => {
    'use strict';

    var date = new Date();
    $('#year').html(date.getFullYear());

    $(document).on('scroll', function () {
        $('.dropdown').hide();
        // $("#navbar").toggleClass('border-bottom', $(this).scrollTop() > $("#navbar").height());
        // $("#navbar").toggleClass('bg-color', $(this).scrollTop() > $("#navbar").height());
        $("#navbar").toggleClass('fixed-top', $(this).scrollTop() > $("#navbar").height());
        $("#navbar").toggleClass('border-bottom', $(this).scrollTop() > $("#navbar").height());
	});

    $('#nav-products').on('click', function(){
        $(this).next().toggle(50);
    });

    $('.navbar-toggler').on('click', function(){
        $('#nav-products').next().hide(50);
    });
});