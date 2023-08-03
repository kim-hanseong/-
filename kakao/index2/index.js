$(function(){
    $('main > ul > li:nth-child(1)').click(function(){
        $('.main_page > ul > li').css({display:'inline-block'})
        $('main > ul > li').css({color:'black' , backgroundColor:'rgb(235, 235, 235)'})
        $(this).css({color:'white' , backgroundColor:'black'})
    })

    $('.kakao_btn').click(function(){
        $('main > ul > li').css({color:'black' , backgroundColor:'rgb(235, 235, 235)'})
        $('.kakao_btn').css({color:'white' , backgroundColor:'black'})
        $('.main_page > ul > li').css({display:'none'})
        $('.kakao').css({display:'inline-block'})
    })
   

    $('.life_btn').click(function(){
        $('.main_page > ul > li').css({display:'none'})
        $('.life').css({display:'inline-block'})
        $('main > ul > li').css({color:'black' , backgroundColor:'rgb(235, 235, 235)'})
        $('.life_btn').css({color:'white' , backgroundColor:'black'})
    })


    $('.curmas_btn').click(function(){
        $('.main_page > ul > li').css({display:'none'})
        $('.curmas').css({display:'inline-block'})
        $('main > ul > li').css({color:'black' , backgroundColor:'rgb(235, 235, 235)'})
        $('.curmas_btn').css({color:'white' , backgroundColor:'black'})
    })

    $('.enter_btn').click(function(){
        $('.main_page > ul > li').css({display:'none'})
        $('.enter').css({display:'inline-block'})
        $('main > ul > li').css({color:'black' , backgroundColor:'rgb(235, 235, 235)'})
        $('.enter_btn').css({color:'white' , backgroundColor:'black'})
    })
    $('.business_btn').click(function(){
        $('.main_page > ul > li').css({display:'none'})
        $('.business').css({display:'inline-block'})
        $('main > ul > li').css({color:'black' , backgroundColor:'rgb(235, 235, 235)'})
        $('.business_btn').css({color:'white' , backgroundColor:'black'})
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