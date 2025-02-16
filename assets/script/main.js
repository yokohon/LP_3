// $('.carousel').slick({
//     autoplay: false, 
//     autoplaySpeed: 1000, 
//     dots: true, 
//     fade: true, 
//     mobileFirst: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// });


$('.carousel').slick({
  centerMode: true,
  centerPadding: '10%',
  slidesToShow: 1,
  dots: true,

  responsive: [
    {
      breakpoint: 768, // 768px以上の画面サイズ
      settings: {
        centerMode: false,
        centerPadding: false,
        slidesToShow: 3, // このサイズでの表示スライド数
        dots: false,
      }
    }
  ]

});