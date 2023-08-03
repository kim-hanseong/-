$(function(){
    $('#kakao_btn').click(function(){
      $('.service_choice_list > li > button').css({backgroundColor:'rgb(241, 241, 241)', color:'black'})
      $('#kakao_btn').css({backgroundColor:'black', color:'white'})  
      $('.service_list > li').css({display:'none'})
      $('#kakaotalk').css({display:'block'})
      // 해당 add class  로 주면 안들어감
    })
    $('#life_btn').click(function(){
      $('.service_choice_list > li > button').css({backgroundColor:'rgb(241, 241, 241)', color:'black'})
      $('#life_btn').css({backgroundColor:'black', color:'white'})  
      $('.service_list > li').css({display:'none'})
      $('#life').css({display:'block'})
      // 해당 add class  로 주면 안들어감
    })
    $('#kermas_btn').click(function(){
      $('.service_choice_list > li > button').css({backgroundColor:'rgb(241, 241, 241)', color:'black'})
      $('#kermas_btn').css({backgroundColor:'black', color:'white'})  
      $('.service_list > li').css({display:'none'})
      $('#kermas').css({display:'block'})
      // 해당 add class  로 주면 안들어감
    })
    $('#enter_btn').click(function(){
      $('.service_choice_list > li > button').css({backgroundColor:'rgb(241, 241, 241)', color:'black'})
      $('#enter_btn').css({backgroundColor:'black', color:'white'})  
      $('.service_list > li').css({display:'none'})
      $('#entertainment').css({display:'block'})
      // 해당 add class  로 주면 안들어감
    })
    $('#business_btn').click(function(){
      $('.service_choice_list > li > button').css({backgroundColor:'rgb(241, 241, 241)', color:'black'})
      $('#business_btn').css({backgroundColor:'black', color:'white'})  
      $('.service_list > li').css({display:'none'})
      $('#business').css({display:'block'})
      // 해당 add class  로 주면 안들어감
    })
    $('#all_btn').click(function(){
      $('.service_choice_list > li > button').css({backgroundColor:'rgb(241, 241, 241)', color:'black'})
      $('#all_btn').css({backgroundColor:'black', color:'white'})  
      $('.service_list > li').css({display:'block'})
      // 해당 add class  로 주면 안들어감
    })

})
// eq 로 줄 수 있고 li:nth 로 줄 수 있고 해당 li 리스트라고 생각하면
// form check-box 로 한다면 