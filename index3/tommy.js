

$(document).ready(function(){
  $(".header_slide").bxSlider({
    // pager: falses,
    pager:false,
  });
});


$(document).ready(function(){
  $(".story_wrap").bxSlider({
    moveSlides: 1,
    minSlides: 2,
    maxSlides:2,
    slideMargin: 50,
    slideWidth: 1000,
    auto : true,
    pause : 5000,
    speed : 1000,
    prevText : '<i class="fa-solid fa-arrow-left"></i>',
    nextText : '<i class="fa-solid fa-arrow-right"></i>'
  });   
});


$(document).ready(function(){
  $(".sub_slide").bxSlider({
    moveSlides: 1,
    minSlides: 2,
    maxSlides:2,
    slideMargin: 50,
    slideWidth: 1000,
    auto : true,
    pause : 5000,
    speed : 1000,
    control : false,
    prevText : '<i class="fa-solid fa-arrow-left"></i>',
    nextText : '<i class="fa-solid fa-arrow-right"></i>',
    pager:false
  });   
});


$(document).ready(function(){
  $(".travel_slide_img").bxSlider({
    moveSlides: 1,
    minSlides: 5,
    maxSlides:5,
    slideMargin: 0,
    slideWidth: 1000,
    auto : true,
    pause : 5000,
    speed : 1000,
    pager:false,
    prevText : '<i class="fa-solid fa-arrow-left"></i>',
    nextText : '<i class="fa-solid fa-arrow-right"></i>'
  });   
});

$(document).ready(function(){
  $(".aside_wrap").bxSlider({
    prevText : '<i class="fa-solid fa-chevron-left"></i>',
    nextText : '<i class="fa-sharp fa-solid fa-chevron-right"></i>',
    pager:false
  });   
});

$(document).ready(function(){
  $(".linen_slide").bxSlider({
    moveSlides: 1,
    minSlides: 5,
    maxSlides:5,
    slideMargin: 150,
    slideWidth: 300,
    slideheight: 1000,
    auto : true,
    pause : 2000,
    speed : 1000,
    pager:false,
    prevText : '<i class="fa-solid fa-chevron-left"></i>',
    nextText : '<i class="fa-sharp fa-solid fa-chevron-right"></i>',
    onSliderLoad:function(){
      $('.linen_slide').removeClass('active1')
      
    },
    onSlideBefore:function(newIndex){
      newIndex.addClass('active1').siblings().removeClass('active1'),
      newIndex.removeClass('active1')
      
      newIndex.next().next().addClass('active1');
    }
  });   
});





$(document).ready(function(){
  $('.travel_btn > button').click(function(){
    $(this).css({color:'green',}) 
  })
})



$(document).ready(function(){
  $('.linen_item > .bx-wrapper > .bx-viewport').css({height:'1000px'})
  ,element.style.setProperty('height', '1000px', 'important');
})


$(function(){
  $('.sub_slide_wrap .bx-prev').click(function(){
    $('.story_slide .bx-prev').click();
  })
})
$(function(){
  $('.sub_slide_wrap .bx-next').click(function(){
    $('.story_slide .bx-next').click();
  })
})

window.addEventListener('resize', function(){
  var nav_choice = document.querySelector('.nav_choice');
  if(window.innerWidth < 768){
      nav_choice.style.width = '100%';
  } else {
      nav_choice.style.width = '50%';
  }
});

