$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 10) {
        $('.container h1').each(function(i) {
            if ($(this).position().top <= windscroll - 100) {
                $('#menubar li.active').removeClass('active');
                $('#menubar li').eq(i).addClass('active');
            }
        });

    } else {

        $('#menubar').removeClass('fixed');
        $('#menubar li.active').removeClass('active');
        $('#menubar li:first').addClass('active');
    }

}).scroll()

$('#menubar.left a[data-toggle="tooltip"]').tooltip({ placement: 'right' });

$('.link').click(function(e){
e.preventDefault();
var link = $(this).attr('href');
var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi},1200, 'easeInOutExpo');
});

$('html,body').scrollspy({ target: '#menubar', offset: 0  });

$.scrollify({
  section : ".container",
  sectionName : false,
  easing: "easeInOutExpo",
  scrollSpeed: 1200,
  offset :0,
  setHeights: false,
  after:function() {$.scrollify.update()}
});
