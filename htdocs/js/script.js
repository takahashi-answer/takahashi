// 言語切り替えボタンのクリックイベント
$('.language-label').on('click', function() {
  $(".header-nav").removeClass("-is-open");
  if ($(".language-swithcher").hasClass('-is-open')) {
    $(".language-swithcher").removeClass("-is-open");
  } else {
    $(".language-swithcher").addClass("-is-open");
  }
})

//メニューアイコンのクリックイベント
$('.menu-icon').on('click', function() {
  $(".language-swithcher").removeClass("-is-open");
  if ($(".header-nav").hasClass('-is-open')) {
    $(".header-nav").removeClass("-is-open");
  } else {
    $(".header-nav").addClass("-is-open");
  }
})
