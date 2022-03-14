$(function () {
    $('.burger-btn').on('click',function(){
        $('.burger-btn').toggleClass('close');
        $('.nav-wrapper').toggleClass('slide-in'); // 書き換え
        $('body').toggleClass('noscroll');
      });
  });