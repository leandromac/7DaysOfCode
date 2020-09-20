;{
  'user strict'

  const withLength = document.querySelector('.length')
  const withUppercase = document.querySelector('.uppercase')
  const withLowercase = document.querySelector('.lowercase')
  const withNumbers = document.querySelector('.numbers')
  const withSymbols = document.querySelector('.symbols')
  const btnGenerate = document.querySelector('.btn-generate')

  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = lowerLetters.toUpperCase();
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=";

  function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
  }

  function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
  }

  function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }

  function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function generatePassword() {
    showBtnCopy()
    const len = withLength.value;

    let password = "";

    if (withUppercase.checked) {
        password += getUppercase();
    }

    if (withLowercase.checked) {
        password += getLowercase();
    }

    if (withNumbers.checked) {
        password += getNumber();
    }

    if (withSymbols.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    $('.pass').val(password);
    
  }

  function generateX() {
    const xs = [];
    if (withUppercase.checked) {
        xs.push(getUppercase());
    }

    if (withLowercase.checked) {
        xs.push(getLowercase());
    }

    if (withNumbers.checked) {
        xs.push(getNumber());
    }

    if (withSymbols.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
  }

  btnGenerate.addEventListener("click", generatePassword);

  function showBtnCopy() {
    $('.btn-copy').show(1000).click(function() {

      $('.pass').click().select()
    
      document.execCommand("copy")
      notification()

    })
  }

  function notification() {
    $('.notification').slideToggle(1000)

    setTimeout(function() {
      $('.notification').hide(1000)
    }, 5000)

  }

}