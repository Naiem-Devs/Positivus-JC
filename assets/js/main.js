(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
  
 //mobile menu hide
  $('.mobile-menu a').click( function (event){ 
    $('.mobile-menu').removeClass('siteBar');   
  }); 

 let videoBtn = document.querySelectorAll('.video_content ul li')

 videoBtn.forEach(videoBtns => {
  videoBtns.addEventListener('click', (e) => {
    videoBtnRemove()
    videoBtns.classList.add('active')
  })
 })

 function videoBtnRemove() {
  videoBtn.forEach(videoBtns => {
    videoBtns.classList.remove('active')
  })
 }





 AOS.init({
  mirror: true,
  duration: 1500,
  initClassName: 'aos-init',
  once: true,
});



$('.text_slider').slick({
  vertical: true,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 300,
  slickNext:false,
  infinite: true,
  slickPrev:false,
  slidesToShow: 1,
});




 
})(jQuery);
