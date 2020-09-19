const timeInterval = 5
const duration = 4000

$('.counter-up').each(function() {  
  let count_to = parseInt($(this).data('countTo'))
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