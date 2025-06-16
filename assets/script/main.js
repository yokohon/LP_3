
$('.carousel').slick({
  centerMode: true,
  centerPadding: '8.333%',
  slidesToShow: 1,
  dots: true,
  mobileFirst: true, //初期設定がモバイル
  arrows: false,

  responsive: [
    {
      breakpoint: 768, // 768px以上の画面サイズ
      settings: {
        centerPadding: '0',
        slidesToShow: 3, // このサイズでの表示スライド数
        // dots: false,
      }
    }
  ]

});