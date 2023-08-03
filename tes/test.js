$(document).ready(function(){
    $(".slide_wrap").bxSlider({
    pager:false,
    prevText : '<img src="./images/lvlTest_19.png" alt="">',
    nextText : '<img src="./images/lvlTest_19.png" alt="">'
    });
    
  });

$(function(){
    $('nav > ul > li:nth-last-child(1)').mouseover(function(){
        $('.head_search').css({display:'block'})
    }).mouseout(function(){
        $('.head_search').css({display:'none'})
    }) 
})