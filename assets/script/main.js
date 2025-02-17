
$('.carousel').slick({
  centerMode: true,
  centerPadding: '10%',
  slidesToShow: 1,
  dots: true,
  mobileFirst: true, //初期設定がモバイル

  responsive: [
    {
      breakpoint: 768, // 768px以上の画面サイズ
      settings: {
        centerMode: false,
        centerPadding: false,
        slidesToShow: 3, // このサイズでの表示スライド数
        // dots: false,
      }
    }
  ]

});