(function(){
  'use strict'

  const t = 1000

  function init() {
    buttonsEvents()
    customPage()
    customText()
    titleDefault()
  }

  function buttonsEvents() {
    $('.btn-hide').click( e => { 
      $('.title-default').hide(t).show(0)
    })

    $('.btn-show').click( e => { 
      $('.title-default').hide(0).show(t)
    })
    
    $('.btn-toggle').click( e => { 
      $('.title-default').toggle(t).show(0)
    })

    $('.btn-fadeout').click( e => { 
      $('.title-default').fadeOut(t).show(0)
    })

    $('.btn-fadetoggle').click( e => { 
      $('.title-default').fadeToggle(t).show(0)
    })

    $('.btn-slidetoggle').click( e => { 
      $('.title-default').slideToggle(t).show(0)
    })

    $('.btn-slideup').click( e => { 
      $('.title-default').slideUp(t).show(0)
    })
  }

  function customPage() {
    const backgroundDefault = $('body').css('background-color')
    $('.bg-body').keyup(function(e) {
        const bgBody = $(this).val()
        if(bgBody !== "") {
            $('body').css('background-color', bgBody)
        } else {
            $('body').css('background-color', backgroundDefault)
        }
    })
    
    $('.font-color').keyup(function(e) {
      const fontColor = $(this).val()
      if(fontColor !== "") {
          $('.title-default').css('color', fontColor)
      } else {
          $('.title-default').css('color', '#000')
      }
    })
    
    $('.bg-font').keyup(function(e) {
      const bgFont = $(this).val()
      if(bgFont !== "") {
          $('.font-bg').css('background-color', bgFont)
      } else {
          $('.font-bg').css('background-color', backgroundDefault)
      }
    })
  }

  function customText() {
    $('.font-family').keyup(function(e) {
      const fontFamily = $(this).val()
      if(fontFamily !== '') {
          $('.font-bg').css('font-family', fontFamily)
      } else {
          $('.font-bg').css('font-family', 'BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif')
      }
    })
    
    $('.font-size').keyup(function(e) {
      const fontSize = $(this).val()
      if(fontSize !== '') {
          $('.title-default').css('font-size', fontSize)
      } else {
          $('.title-default').css('font-size', '2rem')
      }
    })

    $('.font-align').keyup(function(e) {
      const fontAlign = $(this).val()
      if(fontAlign !== '') {
          $('.title-default').css('text-align', fontAlign)
      } else {
          $('.title-default').css('text-align', 'left')
      }
    })
  }

  function text() {
    return $('.title-default').text("There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.")
  }

  function titleDefault() {
    text()
    $('.input-text').keyup(function() {
      this.value === "" ?
        text()
      :
        $('.title-default').text(this.value)
    })
  }

  init()

})(jQuery)