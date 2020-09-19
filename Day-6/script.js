;{
  'use strict'

  const rand = (minimum, maximum) => {
    const min = Math.ceil(minimum)
    const max = Math.floor(maximum)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const btnRandom = document.querySelector('.btn-random')
  const startNumber = document.querySelector('.start-number')
  const endNumber = document.querySelector('.end-number')
  const counterUp = document.querySelector('.counter-up')

  btnRandom.addEventListener('click', e => {
    e.preventDefault()
    animationNumber()
  })

  function animationNumber() {
    const timeInterval = 5
    const duration = 1000
    let numberSorted = rand(startNumber.value, endNumber.value)
    counterUp.setAttribute('data-count-to', numberSorted)
    console.log(numberSorted)

    $('.counter-up').each(function() {  
      let count_to = parseInt(numberSorted)
      let interval = duration / timeInterval
      let incremento = count_to / interval
      let num = 0
      let el = $(this)
      
      let timer = setInterval(function() {
        if (num >= count_to){
          num = count_to;
          clearInterval(timer);
        }
        
        let txt = num.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        el.text(txt)
        num += incremento      
      }, timeInterval)
    })
  }
}