;{
  'use strict'

  const btn = document.querySelector('.btn')
  const btnDelete = document.querySelector('[aria-label="delete"]')
  const panelUrl = document.querySelector('.message')

  btn.addEventListener('click', e => {
    e.preventDefault()
    urlGenerate()
  })

  btnDelete.addEventListener('click', () => {
    panelUrl.style.display = 'none'
  })

  function urlGenerate() {

    let phone = document.querySelector('.phone')
    let msg = document.querySelector('.msg')
    let inputUrl = document.querySelector('.url-generate')
    let url = `https://api.whatsapp.com/send?=+55${phone.value.replace(/\D/g,'')}phone&text=${msg.value.replace(/\s/g, '%20')}`

    if(phone.value === '') {
      alert('Phones field is empty!')
    }
    else {
      panelUrl.style.display = ''
      return inputUrl.value = url
    }
    
  }

}