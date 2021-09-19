$(function() {
    
    
    const headerElement = document.getElementById('header');
    
document.addEventListener('scroll', function() {

if(document.getElementById('top-wrapper').getBoundingClientRect().bottom < 0) {
   headerElement.classList.add('active');

}else {
    $('.hamburger-menu').removeClass('active');
    $('.hamburger').removeClass('active');
    headerElement.classList.remove('active');
    
}

});

$(window).scroll(function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();

    /*=================================================
    メインビジュアルの拡大・縮小
    ===================================================*/
    mv_scale(scroll);
    function mv_scale(scroll) {
        // window.innerWidthで画面幅を取得
        // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
        if (window.innerWidth > 900) {
          // メインビジュアルのCSS（width）を変更する
          // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
          $('.top-logo img').css({
            'width': 100/3 + scroll/10  + '%'
          });
        // スマホ表示の場合の処理（画面幅が900px以下の場合）
        } else {
          // メインビジュアルのCSS（width）を変更する
          // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
          $('.top-logo img').css({
            'width': 100 - scroll/10  + '%'
          });
        }
      }


      // アクセスの背景画像

      let access_position = $('.access-wrapper').offset().top - $(window).height();
      let contact_position = $('.contact-wrapper').offset().top - $(window).height();

      if(scroll > access_position){
        // #contactが表示されるまでの間は、背景画像をfadeInで表示する
        if(scroll < contact_position){
          $('.bg').fadeIn(500);
        } else {
          $('.bg').fadeOut(500);
        }
      // #accessが表示される前の場合
      } else {
        // 背景画像を表示しない
        $('.bg').fadeOut(500);
      }

      let gallery_position = $('.gallery-title').offset().top - $(window).height();
      
      if(scroll > gallery_position){
        // アクセスが表示されるまでサイドメニューを表示
        if(scroll < access_position){
          $('.side-menu').addClass('show');
        } else {
          $('.side-menu').removeClass('show');
        
        }
        
      // ギャラリーより前
      } else {
        // サイドメニューを表示しない
        $('.side-menu').removeClass('show');
      }

      
    
    });




    $(function() {
    $('.hamburger').click(function() {
        $('.hamburger').toggleClass('active');

        if ($('.hamburger').hasClass('active')) {
            $('.hamburger-menu').addClass('active');
        } else {
            $('.hamburger-menu').removeClass('active');
        }
    });
});


$('a[href^="#top-wrapper"]').click(function(){
    $('.hamburger-menu').removeClass('active');
    $('.hamburger').removeClass('active');

    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

$('a[href^="#information"]').click(function(){
    $('.hamburger-menu').removeClass('active');
    $('.hamburger').removeClass('active');

    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

$('a[href^="#gallery"]').click(function(){
    $('.hamburger-menu').removeClass('active');
    $('.hamburger').removeClass('active');

    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

$('a[href^="#access"]').click(function(){
    $('.hamburger-menu').removeClass('active');
    $('.hamburger').removeClass('active');

    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

$('a[href^="#recruit"]').click(function(){
    $('.hamburger-menu').removeClass('active');
    $('.hamburger').removeClass('active');
    
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

$('a[href^="#contact"]').click(function(){
    $('.hamburger-menu').removeClass('active');
    $('.hamburger').removeClass('active');
    
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

$(function() {
  $('.element4').click(function() {
      $('.map').toggleClass('active');

      if ($('.map').hasClass('active')) {
          $('.map').addClass('active');
      } else {
          $('.map').removeClass('active');
      }
  });
});


});
