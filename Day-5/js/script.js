;{
  'use strict'

  const btn = document.querySelector('.btn')
  const btnDelete = document.querySelector('[aria-label="delete"]')
  const panelUrl = document.querySelector('.message')
  const btnCopy = document.querySelector('.btn-copy')
  const btnOpen = document.querySelector('.btn-open')

  btn.addEventListener('click', e => {
    e.preventDefault()
    urlGenerate()

  })

  btnDelete.addEventListener('click', e => {
    e.preventDefault()
    panelUrl.style.display = 'none'
  })

  function btnOpenFunc(url) {
    btnOpen.setAttribute('href', url)
    btnOpen.setAttribute('target', '_blank')
  }

  function urlGenerate() {

    let phone = document.querySelector('.phone')
    let msg = document.querySelector('.msg')
    let inputUrl = document.querySelector('.url-generate')
    let url = `https://api.whatsapp.com/send?phone=+55${phone.value.replace(/\D/g,'')}&text=${msg.value.replace(/\s/g, '%20')}`

    if(phone.value === '' || msg.value === '') {
      alert('Has fields empty!')
    }
    else {
      btnOpenFunc(url)
      panelUrl.style.display = ''
      return inputUrl.value = url
    }
    
  }

}