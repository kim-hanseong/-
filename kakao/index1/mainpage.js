// $(function(){
//     $('#list02').click(function(){
//         $('body').toggleClass('focus');
//     })
// })
document.addEventListener('DOMContentLoaded', function() {
    var headIcons = document.querySelector('#list02');
    var isFocused = false;
    headIcons.addEventListener('click', function() {
        isFocused =!isFocused;
        document.body.classList.toggle('focus', isFocused);
    });
});