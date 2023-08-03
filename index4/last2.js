$(document).ready(function(){
    for(var i = 0; i < $('[data-event="fullpage"]').length; i++){
        $('ol').append('<li>' + (i + 1) + 'page </li>')
    }
    $('ol li').eq(0).addClass('active');

    $('[data-event="fullpage"]').on('mousewheel DOMMouseScroll',function(e){
        var delta = e.originalEvent.wheelDelta;    // 마우스 스크롤 방향 감지 이벤트
        if(delta > 0){
            if(!($(this).prev().offset() == undefined)){
                $('html').stop().animate({scrollTop : $(this).prev().offset().top},1000);
                $('ol li').removeClass('active');
                $('ol li').eq($(this).prev().index()).addClass('active');
            }
        }else{
            if(!($(this).next().offset() == undefined)){
                $('html').stop().animate({scrollTop : $(this).next().offset().top},1000);
                $('ol li').removeClass('active');
                $('ol li').eq($(this).next().index()).addClass('active');
            }
        }


        $('ol li').click(function(){
            $('ol li').removeClass('active');
            $(this).addClass('active');
            $('html').stop().animate({scrollTop : $('[data-event="fullpage"]').eq($(this).index()).offset().top},1000);
        });
    });


});

var isAnimated = false; // 애니메이션이 실행되었는지 여부를 저장하는 변수

$(window).scroll(function(){
    if($(this).scrollTop() > 1448 ){ // 애니메이션이 실행되지 않았을 때만 실행
        $('.work_slide').addClass('ani_slide');
        $('.first_img').addClass('first_Add');
        $('.first_head').addClass('first_headAdd');
        $('.first_text').addClass('first_textAdd');

        $('.html_icon').addClass('html_icon_Add')
        $('.css_icon').addClass('css_icon_Add')
        $('.js_icon').addClass('js_icon_Add')
        $('.html_icon').css({opacity:'1'})
        $('.css_icon').css({opacity:'1'})
        $('.js_icon').css({opacity:'1'})
        isAnimated = true; // 애니메이션이 실행되었다고 표시
    };
});

$(function(){
    $('.first_slide_btn').finish().click(function(){
        $('.first_slide').css({display:'block' ,opacity:'1'}),
        $('.second_slide').css({display:'none'}),
        $('.third_slide').css({display:'none'})
    })

    $('.second_slide_btn').click(function(){
        $('.first_slide').css({display:'none'}),
        $('.second_slide').css({display:'block'}),
        $('.third_slide').css({display:'none'})
    })
    $('.third_slide_btn').click(function(){
        $('.first_slide').css({display:'none'}),
        $('.second_slide').css({display:'none'}),
        $('.third_slide').css({display:'block'})
    })

})
$('bx-viewport').style.height = "800.433px";