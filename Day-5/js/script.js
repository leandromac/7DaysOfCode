;{
  'use strict'

  $('.generated-notification').hide(0)
  $('.copied-notification').hide(0)
  const btn = document.querySelector('.btn')
  const btnDelete = document.querySelector('[aria-label="delete"]')
  const panelUrl = document.querySelector('.message')
  const btnCopy = document.querySelector('.btn-copy')
  const btnOpen = document.querySelector('.btn-open')
  const inputUrl = document.querySelector('.url-generate')

  btn.addEventListener('click', e => {
    e.preventDefault()
    urlGenerate()
  })

  btnDelete.addEventListener('click', e => {
    e.preventDefault()
    $('.message').fadeOut(800)
  })

  btnCopy.addEventListener('click', e => {
    $('.copied-notification').show(1000)
    setInterval( function() { $('.copied-notification').hide(1000) }, 5000)
    inputUrl.select()
    inputUrl.setSelectionRange(0, 99999)
    document.execCommand('copy')
    
  })

  function btnOpenFunc(url) {
    btnOpen.setAttribute('href', url)
    btnOpen.setAttribute('target', '_blank')
  }

  function urlGenerate() {
    $('.generated-notification').show(1000)
    setInterval( function() { $('.generated-notification').hide(1000) }, 5000)
    let phone = document.querySelector('.phone')
    let msg = document.querySelector('.msg')
    let url = `https://api.whatsapp.com/send?phone=+55${phone.value.replace(/\D/g,'')}&text=${msg.value.replace(/\s/g, '%20')}`

    if(phone.value === '' || msg.value === '') {
      alert('Has fields empty!')
    }
    else {
      $('.message').fadeIn(800)
      btnOpenFunc(url)
      panelUrl.style.display = ''
      return inputUrl.value = url
    }
  }

}