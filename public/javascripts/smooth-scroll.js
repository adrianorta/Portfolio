$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('#menubar').addClass('fixed');
        $('.parallax').each(function(i) {
            if ($(this).position().top <= windscroll - 100) {
                $('#menubar li.active').removeClass('active');
                $('#menubar li').eq(i+1).addClass('active');
            }
        });

    } else {
        $('#menubar').removeClass('fixed');
        $('#menubar li.active').removeClass('active');
        $('#menubar li:first').addClass('active');
    }

})

$('.link').click(function(e){
e.preventDefault();
var link = $(this).attr('href');
var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi},1200, 'easeInOutExpo');
});

$.scrollify({
  section : ".parallax",
  sectionName : false,
  interstitialSection : "",
  easing: "easeOutExpo",
  scrollSpeed: 1100,
  offset : 0,
  scrollbars: true,
  standardScrollElements: "",
  setHeights: true,
  overflowScroll: true,
  updateHash: true,
  touchScroll:true,
  before:function() {},
  after:function() {},
  afterResize:function() {},
  afterRender:function() {}
});
