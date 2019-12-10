$(document).ready(function(){

  $("#card-first").flip({trigger: 'hover'});

  $("#card-second").flip({trigger: 'hover'});

  $("#card-third").flip({trigger: 'hover'});

  $("#tabs-portfolio").tabs();

  $("#tabs-services").tabs();
    
  $(".single-item").slick({
    dots: true,
    arrows: true
  });

  //stiki header 
  $(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 200) $("#header").removeClass('fixed-header');
    else $("#header").addClass('fixed-header');
  });

  // якорь плавный скрол
  $("#menu").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  // button back top 
  var btn = $('#btn-back-to-top');

  $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
          btn.addClass('show');
      } else {
          btn.removeClass('show');
      }
  });

  btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
  });
  
  // button to about
  $("#btn-to-about").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  // logo to top
  $("#scroll-to-top").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  // bars-menu

  $("#bars-btn").click(function(){
    $("body").toggleClass("nav-show");
  });
});