const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
	$("#flipbook").turn({
		width: 400,
		height: 300,
		autoCenter: true,
    
	});