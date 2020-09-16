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
      
      let result = document.querySelector('.result-text')
      result.innerHTML = `Resultado da pesquisa para o CEP <strong>${data.cep}</strong>`
      result.style.display = ''

      let cep = document.querySelector('.cep')
      let logradouro = document.querySelector('.logradouro')
      let bairro = document.querySelector('.bairro')
      let cidade = document.querySelector('.cidade')
      let uf = document.querySelector('.uf')
      let ddd = document.querySelector('.ddd')

      cep.innerText = data.cep
      logradouro.innerText = data.logradouro
      bairro.innerText = data.bairro
      cidade.innerText = data.localidade
      uf.innerText = data.uf
      ddd.innerText = data.ddd

    } )
  })
  .catch( e => console.log('Deu erro: ' + e.message))

})