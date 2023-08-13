$(function(){
    $('nav > ul > li:nth-child(1)').click(function(){
        $('nav > ul > li:nth-child(1) > ul').css({display:'flex'})
    })
})






var lastScrollTop = 0;
$(window).scroll(function() {
  var currentScrollTop = $(this).scrollTop();
  if (currentScrollTop < lastScrollTop) {
      // 스크롤이 위로 올라갈 때 실행할 코드
      $('header').addClass('active');
    } 
        else {
        // 스크롤이 아래로 내려갈 때 실행할 코드
        $('header').removeClass('active');
                
    }
    lastScrollTop = currentScrollTop;
});





