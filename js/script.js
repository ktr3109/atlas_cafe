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
    //ハンバーガーボタン（.menu-trigger）をタップすると、
    $(this).toggleClass('active');
    //タップしたハンバーガーボタン（.menu-trigger）に（.active）を追加・削除する。
    if ($(this).hasClass('active')) {
      //もし、ハンバーガーボタン（.menu-trigger）に（.active）があれば、
      $('.g-navi').addClass('active');
      //(.g-navi)にも（.active）を追加する。
    } else {
      //それ以外の場合は、
      $('.g-navi').removeClass('active');
      //(.g-navi)にある（.active）を削除する。
    }
  });
  $('.nav-wrapper ul li a').click(function () {
    //各メニューリンク（.nav-wrapper ul li a）をタップすると、
    $('.menu-trigger').removeClass('active');
    //ハンバーガーボタン（.menu-trigger）にある（.active）を削除する。
    $('.g-navi').removeClass('active');
    //(.g-navi)にある（.active）も削除する。
  });
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200){//上から200pxスクロールしたら
    $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
    $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
  }else{
    if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
      $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
      $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
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