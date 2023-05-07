//スクロールでheaderに色をつける
$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('nav.g-navi,.g-navi ul li a,.g-navi ul li p').addClass('scrolled');
    $('ul.accordion-content').addClass('scrolled');
  } else {
    $('nav.g-navi,.g-navi ul li a,.g-navi ul li p').removeClass('scrolled');
    $('ul.accordion-content').removeClass('scrolled');
  }
});

//スムーススクロール
$(document).ready(function() {
  $('nav.g-navi a[href^="#"]').click(function() {
    var target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 1000);
      return false;
    }
  });
});

//アコーディオンメニュー
$(document).ready(function() {
  $('.accordion-title').click(function() {
    $(this).toggleClass('active');
    $(this).next('.accordion-content').slideToggle();
  });
});

// ハンバーガーメニュー
$(function () {
  $('.menu-trigger').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.g-navi').addClass('active');
    } else {
      $('.g-navi').removeClass('active');
    }
  });
  $('.nav-wrapper ul li a').click(function () {
    $('.menu-trigger').removeClass('active');
    $('.g-navi').removeClass('active');
  });
});

//ページトップへ移動ボタン
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200){//200px動いた場合
    $('#page-top').removeClass('moving-down');
    $('#page-top').addClass('moving-up');
  }else{
    if($('#page-top').hasClass('moving-up')){
      $('#page-top').removeClass('moving-up');
      $('#page-top').addClass('moving-down');
    }
  }
}
// 画面をスクロールをしたら動く
$(window).scroll(function(){
  PageTopAnime();
});

// タブ切り替え
$(function () {
  var $filters = $('.filter [data-filter]'),
    $boxes = $('.menu-wrapper [data-category]');

  $filters.on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $filters.removeClass('active');
    $this.addClass('active');
    var $filterTime = $this.attr('data-filter');

    if ($filterTime == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function () {
          $boxes.addClass('is-animated').fadeIn();
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function () {
          $boxes.filter('[data-category = "' + $filterTime + '"]')
            .addClass('is-animated').fadeIn();
        });
    }
  });
});