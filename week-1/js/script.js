
  const input = document.querySelector('input')
  const buttonAdd = document.querySelector('.button')
  const list = document.querySelector('.list')

  buttonAdd.addEventListener('click', e => {
    let a = document.createElement('a')
    a.className = "panel-block is-active"
    a.innerHTML = `<span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                  </span>
                  ${input.value}`
  list.appendChild(a)
  input.value = ''
  })


            
