let subject = '',
    message = '';
$('.btn-info').click(function(){

    if($('#subject').val() !== '') {
      subject = $('#subject').val();
    } else {
      subject = 'Contact Form'
    }

    message = $('#message').val();
    $('.btn-info').attr('href', `mailto:adrianorta510@gmail.com?subject=${subject}&body=${message}`);

})
