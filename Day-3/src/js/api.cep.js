const inputCEP = document.querySelector('.input')
const buttonBuscarCEP = document.querySelector('.button')


buttonBuscarCEP.addEventListener("click", e => {
  let cep = inputCEP.value.replace("-","")
  
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => { response.json()
    .then( data => {
      let tr = document.querySelector('.tr-body')
      let tdCEP = document.createElement('td')
      let tdLogradouro = document.createElement('td')
      let tdBairro = document.createElement('td')
      let tdLocalidade = document.createElement('td')
      let tdEstado = document.createElement('td')
      let tdDDD = document.createElement('td')
      
      tdCEP.innerText = data.cep
      tdLogradouro.innerText = data.logradouro
      tdBairro.innerText = data.bairro
      tdLocalidade.innerText = data.localidade
      tdEstado.innerText = data.uf
      tdDDD.innerText = data.ddd

      tr.appendChild(tdCEP)
      tr.appendChild(tdLogradouro)
      tr.appendChild(tdBairro)
      tr.appendChild(tdLocalidade)
      tr.appendChild(tdEstado)
      tr.appendChild(tdDDD)
    } )
  })
  .catch( e => console.log('Deu erro: ' + e.message))

})