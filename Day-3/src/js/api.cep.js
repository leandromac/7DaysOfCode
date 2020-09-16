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

      let cep = document.querySelector('.cep').innerText = data.cep
      let logradouro = document.querySelector('.logradouro').innerText = data.logradouro
      let bairro = document.querySelector('.bairro').innerText = data.bairro
      let localidade = document.querySelector('.localidade').innerText = data.localidade
      let uf = document.querySelector('.uf').innerText = data.uf
      let ddd = document.querySelector('.ddd').innerText = data.ddd

    } )
  })
  .catch( e => alert('Desculpe, este CEP não foi encontrado!') )

})