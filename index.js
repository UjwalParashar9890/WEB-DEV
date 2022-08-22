$(document).ready(function () {
    $('.post-container').owlCarousel({
        pagination: false,
        autoplay:true,
        responsive: {
           0:{
               items:1
           },
           700:{
               items:2
           },
           1000:{
               items:3
           },
           1200:{
               items:4
           },
        },
        loop: true
    })
})
