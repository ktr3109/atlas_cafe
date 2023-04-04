//スクロールでheaderに色をつける
$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('nav.g-navi,.g-navi ul li a').addClass('scrolled');
  } else {
    $('nav.g-navi,.g-navi ul li a').removeClass('scrolled');
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

// スライド
$(function () {
  function toggleChangeBtn() {
    var slideIndex = $('.staff-box').index($('.active'));
    $('.slide-button').show();
    if (slideIndex == 0) {
      $('.prev').hide();
    } else if (slideIndex == 2) {
      $('.next').hide();
    }
  }
  toggleChangeBtn();
  $('.next').click(function () {
    // nextボタンを押したとき
    var $displaySlide = $('.active');
    // 現在表示中のスライドを取得
    $displaySlide.removeClass('active box-design');
    // そのスライドからactiveクラスを除いて表示されないようにする。
    $displaySlide.next().addClass('active box-design');
    // 次のスライドにactiveクラスをつけ、表示させる。
    toggleChangeBtn();
    // nextボタンを隠すか判断
  });
  $('.prev').click(function () {
    // prevボタンを押したとき
    var $displaySlide = $('.active');
    // 現在表示中のスライドを取得
    $displaySlide.removeClass('active box-design');
    // そのスライドからactiveクラスを除いて表示されないようにする。
    $displaySlide.prev().addClass('active box-design');
    // 前のスライドにactiveクラスをつけ、表示させる。
    toggleChangeBtn();
    // prevボタンを隠すか判断
  });
});

// モーダル部分
$(function () {
  $('.modalopen').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      console.log(modal);
      $(modal).fadeIn();
      return false;
    });
  });
  $('.modalClose').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });
});

$(function () {
  var $filters = $('.filter [data-filter]'),
    $boxes = $('.lineup-wrapper [data-category]');

  $filters.on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterTime = $this.attr('data-filter');

    if ($filterTime == 'ranking') {
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

///*========= ページトップのためのCSS ===============*/
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
