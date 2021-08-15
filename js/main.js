$(window).on('scroll', function () {
  // checks if window is scrolled more than 500px, adds/removes solid class
  if ($(this).scrollTop() > 0) {
    $('.top-menu').addClass('affix');
  } else {
    $('.top-menu').removeClass('affix');
  }
  // checks if window is scrolled more than 500px, adds/removes top to target class
  
});