let subject = '',
    message = '';
$('form').submit(function(){
  if($('#subject').val() !== '') {
    subject = $('#subject').val();
  } else {
    subject = 'Contact Form'
  }

  message = $('#message').val();
  $('form').attr('action', `mailto:adrianorta510@gmail.com?subject=${subject}&body=${message}`);
})
