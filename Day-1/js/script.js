'use strict'

const input = document.querySelector('input')
const buttonAdd = document.querySelector('.button')
const list = document.querySelector('.list')

buttonAdd.addEventListener('click', e => {
  if(!!input.value === false) {
    alert('You need to type a task!')
  }
  else {
    let a = document.createElement('a')
    a.className = "panel-block task is-active"
    a.innerHTML = `<span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                  </span>
                  ${input.value}`
    a.setAttribute('onclick', 'taskDone(this)')
    list.appendChild(a)
    input.value = ''
  }
})
        
function taskDone(element) {
  element.classList.add('has-text-success')
  element.style.textDecoration = 'line-through'
  element.style.opacity = '0.4'
}