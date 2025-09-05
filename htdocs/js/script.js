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

// スライダーの設定（swiper）
const Swiper1 = new Swiper('.-swiper1', {
  // Optional parameters
  //If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  //Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
    delay: 5000,
  },

});

const Swiper2 = new Swiper('.-swiper2', {
  // Optional parameters
  //If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  //Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


