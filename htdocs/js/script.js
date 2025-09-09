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

// const Swiper2 = new Swiper('.-swiper2', {
//   // Optional parameters
//   //If we need pagination

//   //And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },

// });

// let SwiperSlider = null; 
let swiper2 = null;

/* Swiperを作成する関数 */
function initSwiper() {
    if( swiper2 === null ) {
        swiper2 = new Swiper('.-swiper2' ,{
        loop: true,
        //Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
  }
}

/* Swiperを解除する関数 */
function destroySwiper() {
    if( swiper2 !== null ){
        swiper2.destroy(false, true);
        swiper2 = null;
  }
}

/* 【読み込み時と画面リサイズ時】
画面サイズが768px以下でSwiperを作成
767px以上の場合はSwiperを解除する */
$(window).on('load resize',function(){
    if( $(window).width() <= 1050 ){
        initSwiper();
    }
    else{
        destroySwiper();
    }
});

let swiper3 = null;
/* Swiperを作成する関数 */
function initSwiper2() {
    if( swiper3 === null ) {
        swiper3 = new Swiper('.-swiper3' ,{
        loop: true,
        //Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
  }
}

/* Swiperを解除する関数 */
function destroySwiper2() {
    if( swiper3 !== null ){
        swiper3.destroy(false, true);
        swiper3 = null;
  }
}

/* 【読み込み時と画面リサイズ時】
画面サイズが768px以下でSwiperを作成
767px以上の場合はSwiperを解除する */
$(window).on('load resize',function(){
    if( $(window).width() <= 1050 ){
        initSwiper2();
    }
    else{
        destroySwiper2();
    }
});






