(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');
  HelloWorldDevsTysonSteele.stopVideoModal('#videoModal', '#video-one');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '43.1425159,-87.9126743', '43.1425159,-87.9126743');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({ autoplay: 6000 });
  HelloWorldDevsTysonSteele.itemCarousel('.js-services-carousel', {
    items: 2,
    loop: true,
    autoplay: true,
    autoplaySpeed: 400,
    autoplayTimeout: 6000,
    autoplayHoverPause:true,
    nav: true,
    dots: false,
    margin: 0,
    responsive: {
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    },
    navText: [
      '<img src="assets/carousel-arrow.png" alt="navigation arrow">',
      '<img src="assets/carousel-arrow.png" alt="navigation arrow">'
    ]
  });

}(jQuery, HelloWorldDevsTysonSteele));
