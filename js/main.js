$(function () {

  // ハンバーガーメニュー

  $('.toggle_btn').on('touchstart', function () {
    if ($('.header').hasClass('open')) {
      $('.header').removeClass('open');

    } else {
      $('.header').addClass('open');
    }
  });

  $('.mask').on('touchstart', function () {
    $('.header').removeClass('open');
  });

  //  スムーススクロール

  $('a[href^="#"]').click(function () {
    $('.header').removeClass('open');
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });

  // フェードイン

  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $('.fadein').each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });

  // ファーストボタン

  $('.first-screen').on('touchstart', function () {
    if ($('.first-screen').hasClass('start')) {
      $('.first-screen').addClass('none');
    }
  });

  $('.close-box').on('touchend', function () {
    $('.first-screen').addClass('start');
    $('.body').removeClass('all-hide');
  });
});