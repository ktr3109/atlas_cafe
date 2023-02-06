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
