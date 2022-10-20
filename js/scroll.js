function useScrolling(el, params){
    ScrollReveal().reveal(el, params);
}

useScrolling('nav', {
    delay: 100,
    distance: '5%',
    origin: 'top',
    easing: 'ease',
    mobile: false,
    // interval: 50
});

useScrolling('.flex-hero', {
    delay: 300,
    distance: '5%',
    origin: 'top',
    easing: 'ease'
});

useScrolling('.cta', {
    delay: 100,
    distance: '5%',
    origin: 'left',
    easing: 'ease'
});

useScrolling('.hero-img', {
    delay: 200,
    distance: '5%',
    origin: 'right',
    easing: 'ease'
});

// CAll TO ACTIONS
useScrolling('.ellipsis', {
    delay: 300,
    distance: '15%',
    origin: 'bottom',
    easing: 'ease',
    interval: 0
});

useScrolling('.line', {
    delay: 300,
    distance: '15%',
    origin: 'right',
    easing: 'ease'
});

useScrolling('.title', {
    delay: 100,
    duration: 900,
    distance: '10%',
    origin: 'top',
    easing: 'ease'
});
// ENDS HERE

// SERVICE CARDS
useScrolling('.card-group .card-service', {
    delay: 300,
    distance: '15%',
    origin: 'bottom',
    easing: 'ease',
    interval: 100
});
// ENDS HERE

// Services
useScrolling('.card', {
    delay: 300,
    distance: '5%',
    origin: 'top',
    easing: 'ease',
    interval: 50
});

useScrolling('.card-img', {
    delay: 300,
    distance: '5%',
    origin: 'bottom',
    easing: 'ease',
});

useScrolling('.card-title', {
    delay: 300,
    distance: '5%',
    origin: 'left',
    easing: 'ease-out',
});

useScrolling('.card-text', {
    delay: 300,
    distance: '5%',
    origin: 'right',
    easing: 'ease',
});

useScrolling('.card-footer a', {
    delay: 300,
    distance: '10%',
    origin: 'bottom',
    easing: 'ease',
});


// ENDS HERE

// ABOUT ME
useScrolling('.a-bit-about-me', {
    delay: 300,
    distance: '5%',
    origin: 'right',
    easing: 'ease',
    interval: 100
});

useScrolling('.about-img', {
    delay: 300,
    distance: '25%',
    origin: 'right',
    easing: 'ease'
});
// ENDS HERE