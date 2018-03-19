let subject = '',
    message = '';
$('form').submit(function(){
  if(!(/Android|webOS|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent) )) {
    if($('#subject').val() !== '') {
      subject = $('#subject').val();
    } else {
      subject = 'Contact Form'
    }

    message = $('#message').val();
    $('form').attr('action', `mailto:adrianorta510@gmail.com?subject=${subject}&body=${message}`);
  }
})
