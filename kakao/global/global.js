window.onload = function () {
  const allSelect = document.body;
  const head = document.querySelector('header');
  const nightBtn = document.querySelector('#nightBtn');
  const nightBtn02 = document.querySelector('#nightBtn02');
  const icons = document.querySelectorAll('.icons_btn > img');
  const nightIcon1 = document.querySelector('.night_icons01');
  const nightIcon2 = document.querySelector('.night_icons02');
  const nightIcon3 = document.querySelector('.night_icons03');
  const nightIcon4 = document.querySelector('.night_icons04');
  const mobileIconsShow = document.querySelector('#show_menu_btn');
  const mobileIconsHide = document.querySelector('#hide_menu_btn');
  const mobilePageTool = document.querySelector('.mobile_page');
  const mobilePageText = document.querySelectorAll('.mobile_several_text > li > a')
  const navIndexList = document.querySelectorAll('.nav_list > li > ul')
  const navIndexListText = document.querySelectorAll('.nav_list > li > ul > li > a')
// NIGHT MODE
  function toggleNightMode() {
    for (const item of icons) {
      item.classList.toggle('icons_active');
    }
    allSelect.classList.toggle('night');
    head.classList.toggle('night');
    mobilePageTool.classList.toggle('night')
    //   mobilePageText.classList.toggle('night')
    nightIcon1.classList.toggle('nightclass1');
    nightIcon2.classList.toggle('nightclass2');
    nightIcon3.classList.toggle('nightclass1');
    nightIcon4.classList.toggle('nightclass2');
    // for each 로 바꾸기
    if (head.classList.contains('night')) {
      for (const item01 of mobilePageText) {
        item01.style.color = "white"
      }
      for (const item01 of navIndexList){
        item01.style.backgroundColor = "white"
      }
      for (const item01 of navIndexListText){
        item01.style.color = "black"
      }
    }
    else {
      for (const item01 of mobilePageText) {
        item01.style.color = "black"
      }
      for (const item01 of navIndexList){
        item01.style.backgroundColor = "black"
      }
      for (const item01 of navIndexListText){
        item01.style.backgroundColor = "white"
      }
    }
  }
  nightBtn02.addEventListener('click', toggleNightMode);
  nightBtn.addEventListener('click', toggleNightMode);

  mobileIconsShow.addEventListener('click', () => {
    mobilePageTool.classList.add('mobileBtn_active');
    allSelect.classList.add('mobile_menu_scroll')
  });
  mobileIconsHide.addEventListener('click', () => {
    mobilePageTool.classList.remove('mobileBtn_active');
    allSelect.classList.remove('mobile_menu_scroll')
  });


  // ==========================================================
    //  여기 수정해야함
  $(function() {
    $('.nav_list > li > span').mouseover(function() {
      $('.nav_list > li > span').addClass("nav_text_active");
      $(this).removeClass("nav_text_active")
    }).mouseout(function() {
      $('.nav_list > li > span').removeClass("nav_text_active");
    });
  });

  $(function() {
    $('.nav_list > li').click(function() {
      $('.nav_list > li > ul').css({ display: 'none' });
      $(this).find('ul').css({ display: 'flex' });
    });
  });
};

// var lastScrollTop = 0;
// $(window).scroll(function() {
//   var currentScrollTop = $(this).scrollTop();
//   // 올라갈 때 lastScrollTop 이 결정되는것 지정된 위치에서부터 0
//   // 그래서 내린 기준에서 0 이 정해지기때문에 원래 위치적인 포지션을 가도 
//   // remove 가 안된거였떤거임;;[]
//   // console.log(this);
//   // console.log(currentScrollTop);
//   if (currentScrollTop < lastScrollTop) {
//       // 스크롤이 위로 올라갈 때 실행할 코드
//       $('header').addClass('scroll_active');
      
//     } 
//     else {
//       // 스크롤이 아래로 내려갈 때 실행할 코드
//       $('header').removeClass('scroll_active');
//             // $('header').removeClass('scroll_active');
//         // }  
//       // })
//     }
//     lastScrollTop = currentScrollTop;
//     // 이게 실행되고 그때부터 스크롤 양이 0 이상인지 아닌지가 구분이 되니까 
//     // 이걸 읽고 if 문이 실행이 되니까  
//     // if(currentHeaderTop > currentScrollTop){
//     //   console.log('djawnstlr');
//     //   $('header').removeClass('scroll_active');

//     // }
//     // 이거 내려갈때도 자꾸 0 으로 찍히네
// });
$(document).ready(function(){
  var lastScrollTop = 0;
  $(window).scroll(function() {
    var currentScrollTop = $(this).scrollTop();
    console.log(currentScrollTop);
    if (currentScrollTop > lastScrollTop) {
        // 스크롤이 위로 올라갔을 때 실행할 코드
        $('header').removeClass('scroll_active');
        $('header').css({top:'-100%'})

    } 
    else {
        // 스크롤이 아래로 내려갔을 때 실행할 코드
        $('header').addClass('scroll_active');
        $('header').css({top:'0'})
    }
    lastScrollTop = currentScrollTop;
  });
});
// var lastScrollTop = 0;
//    $(window).scroll(function(){
//   if($(this).scrollTop() > 100){
//       $("header").removeClass('scroll_active');
//       // list1.addClass('stick1')
      
//   }
//   else{
//       $("header").removeClass('scroll_active');
//   }
// });
