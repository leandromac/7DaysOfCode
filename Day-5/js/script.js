;{
  'use strict'

  const inputUrl = document.querySelector('.url-generate')

  $('.btn').click(function(e) {
    e.preventDefault()
    urlGenerate()
  })

  $('[aria-label="delete"]').click(function(e) {
    e.preventDefault()
    $('.message').fadeOut(800)
  })

  $('.btn-copy').click(function(e) {
    $('.copied-notification').show(1000)
    setInterval( function() { $('.copied-notification').hide(1000) }, 5000)
    inputUrl.select()
    inputUrl.setSelectionRange(0, 99999)
    document.execCommand('copy')
  })

  function notification() {
    if(!$('.phone').val() === true || !$('.msg').val() === true) {
      $('.empty-notification').show(1000)
      setInterval( function() { $('.empty-notification').hide(1000) }, 5000)
    }
    else if(!$('.phone').val() === false || !$('.msg').val() === false) {
      $('.generated-notification').show(1000)
      setInterval( function() { $('.generated-notification').hide(1000) }, 5000)
    }
  }

  function btnOpenFunc(url) {
    $('.btn-open').attr('href', url).attr('target', '_blank')
  }

  function urlGenerate() {
    let url = `https://api.whatsapp.com/send?phone=+55${$('.phone').val().replace(/\D/g,'')}&text=${$('.msg').val().replace(/\s/g, '%20')}`

    if($('.phone').val() === '' || $('.msg').val() === '') {
      notification()
    }
    else {
      notification()
      btnOpenFunc(url)
      $('.message').css('display', '')
      return inputUrl.value = url
    }
  }

}