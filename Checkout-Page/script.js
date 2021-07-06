/* Handle Interactions with Number of Products and Price */
// select dom elements(add buttons, minus buttons, product counts, and total price)
const product1AddBtn = document.querySelector('.product .add-btn')
const product1MinusBtn = document.querySelector('.product .minus-btn')
const product2AddBtn = document.querySelector('.product2 .add-btn')
const product2MinusBtn = document.querySelector('.product2 .minus-btn')
const product1Count = document.querySelector('.product .count')
const product2Count = document.querySelector('.product2 .count')
const totalPrice = document.querySelector('.total')

// helper functions
const setTotalPrice = () => {
  const calcTotalPrice = () => {
    if (product1Count.innerHTML == 0 && product2Count.innerHTML == 0) return 0
    return (
      product1Count.innerHTML * 54.99 + product2Count.innerHTML * 74.99 + 19
    )
  }
  totalPrice.innerHTML = `$${calcTotalPrice().toFixed(2)}`
}

const setCount = (type, productCount) => {
  const incrementCount = (productCount) => {
    productCount.innerHTML++
  }
  const decrementCount = (productCount) => {
    if (productCount.innerHTML == 0) return
    productCount.innerHTML--
  }
  if (type == 'increment') incrementCount(productCount)
  else if (type == 'decrement') decrementCount(productCount)
}

const handler = (type, productCount) => {
  return () => {
    setCount(type, productCount)
    setTotalPrice()
  }
}

// event listeners
product1AddBtn.addEventListener('click', handler('increment', product1Count))
product1MinusBtn.addEventListener('click', handler('decrement', product1Count))
product2AddBtn.addEventListener('click', handler('increment', product2Count))
product2MinusBtn.addEventListener('click', handler('decrement', product2Count))

/*Validate Form Inputs*/
// helper functions, check if input value is valid or not using regex
const isValidEmail = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regex.test(email)
}

const isValidPhoneNumber = (phoneNumber) => {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/im
  return regex.test(phoneNumber)
}

const isValidName = (name) => {
  const regex = /^[a-zA-Z]+ [a-zA-Z]+$/
  return regex.test(name)
}

const isValidAddress = (address) => {
  const regex = /^[a-zA-Z0-9\s,'-]+$/
  return regex.test(address)
}

const isValidCity = (city) => {
  const regex = /^[A-Za-z]{4}(?:|[A-Za-z]{4,})$/
  return regex.test(city)
}

const isValidCountries = (length) => {
  return length >= 3
}

const isValidPostalCode = (postalCode) => {
  const regex = /^([0-9]{5}|[a-zA-Z][a-zA-Z ]{0,49})$/
  return regex.test(postalCode)
}

const isValidPrice = (price) => {
  return price !== '$0.00'
}

//helper function, add 'visible' class to input error message if it isn't valid and remove if it is valid
const changeVisiblity = (isValid, message) => {
  if (isValid) {
    message.classList.remove('visible')
  } else {
    message.classList.add('visible')
  }
}

// helper fuctions, each fun() validate an input
const validateEmail = () => {
  const email = document.getElementById('email')
  const emailValidationMsg = document.getElementById('email-validation-message')
  changeVisiblity(isValidEmail(email.value), emailValidationMsg)
}

const validatePhoneNumber = () => {
  const phoneNumber = document.getElementById('phone-number')
  const phoneNumberValidationMsg = document.getElementById(
    'phone-number-validation-message'
  )
  changeVisiblity(
    isValidPhoneNumber(phoneNumber.value),
    phoneNumberValidationMsg
  )
}

const validateName = () => {
  const name = document.getElementById('name')
  const nameValidationMsg = document.getElementById('name-validation-message')
  changeVisiblity(isValidName(name.value), nameValidationMsg)
}

const validateAddress = () => {
  const address = document.getElementById('address')
  const addressValidationMsg = document.getElementById(
    'address-validation-message'
  )
  changeVisiblity(isValidAddress(address.value), addressValidationMsg)
}

const validateCity = () => {
  const city = document.getElementById('city')
  const cityValidationMsg = document.getElementById('city-validation-message')
  changeVisiblity(isValidCity(city.value), cityValidationMsg)
}

const validateCountries = () => {
  const countries = document.querySelector('select')
  const countriesValidationMsg = document.getElementById(
    'country-validation-message'
  )
  changeVisiblity(
    isValidCountries(countries.selectedOptions.length),
    countriesValidationMsg
  )
}

const validatePostalCode = () => {
  const postalCode = document.getElementById('postal-code')
  const postalCodeValidationMsg = document.getElementById(
    'postal-code-validation-message'
  )
  changeVisiblity(isValidPostalCode(postalCode.value), postalCodeValidationMsg)
}

const validateTotalPrice = () => {
  const totalPriceValidationMsg = document.getElementById(
    'price-validation-message'
  )
  changeVisiblity(isValidPrice(totalPrice.innerHTML), totalPriceValidationMsg)
}

const showAlert = () => {
  const alert = document.querySelector('.alert')
  const closeIcon = document.querySelector('.close-icon')
  const visibleErrors = document.querySelectorAll('.visible')
  if (!visibleErrors.length) {
    alert.classList.add('display-flex')
  }
  closeIcon.addEventListener('click', () => {
    alert.classList.remove('display-flex')
  })
}

// prevent default on submition and add form validation
const submitBtn = document.querySelector('.btn-submit')
submitBtn.addEventListener('click', (event) => {
  event.preventDefault()
  validateEmail()
  validatePhoneNumber()
  validateName()
  validateAddress()
  validateCity()
  validateCountries()
  validatePostalCode()
  validateTotalPrice()
  showAlert()
})
