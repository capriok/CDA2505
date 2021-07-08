function problemOne(event) {
  this.remove()

}

// reference the elment "#remove-me" and add an eventlistener for the click event:
document.getElementById("remove-me").addEventListener('click', problemOne)

/* ---------------------------------------- */

function problemTwo(event) {
  this.querySelector('.child').remove()

}

// reference the elment "#remove-my-children" and add an eventlistener for the click event:
document.getElementById("remove-my-children").addEventListener('click', problemTwo)

/* ---------------------------------------- */


function problemThree(event) {
  if (!this.children.length) {
    return this.remove()
  }

  this.querySelector('.child').remove()

}

// reference the elment "#remove-my-children-then-me" and add an eventlistener for the click event:
document.getElementById("remove-my-children-then-me").addEventListener('click', problemThree)

/* ---------------------------------------- */

function problemFour(event) {
  const div = document.createElement('div')
  div.innerText = "New Item"
  div.classList.add('child')

  this.appendChild(div)

}

// reference the elment "#add-children" and add an eventlistener for the click event:
document.getElementById("add-children").addEventListener('click', problemFour)


/* ---------------------------------------- */

function problemFive(event) {
  const target = event.target

  console.log(target);
  this.appendChild(target)

}

// reference the elment "#to-the-back" and add an eventlistener for the mouseup event:
document.getElementById("to-the-back").addEventListener('click', problemFive)


/* ---------------------------------------- */


function problemSix(event) {
  const target = event.target
  if (target === this) return
  target.innerText = parseInt(target.innerText) + 1

}

// reference the elment "#increment-child" and add an eventlistener for the click event:
document.getElementById("increment-child").addEventListener('click', problemSix)


/* ---------------------------------------- */


let sevenShiftPressed = false
document.addEventListener('keydown', () => sevenShiftPressed = true)
document.addEventListener('keyup', () => sevenShiftPressed = false)

function problemSeven(event) {
  const target = event.target
  const currVal = parseInt(target.innerText)

  target.innerText = sevenShiftPressed
    ? currVal + 1
    : currVal - 1

}

// reference the elment "#increment-decrement" and add an eventlistener for the click event:
document.getElementById("increment-decrement").addEventListener('click', problemSeven)
document.removeEventListener('keydown', () => { })
document.removeEventListener('keyup', () => { })


/* ---------------------------------------- */

const eightUserInput = document.getElementById("echo-user-input")

function problemEight(event) {
  eightUserInput.querySelector('.user-input-copy').innerText = event.target.value
}

// reference the elment "#echo-user-input" and add an eventlistener for the keyup event:
eightUserInput.querySelector('input').addEventListener('keyup', problemEight)


/* ---------------------------------------- */

const ninePasteInReverse = document.getElementById("paste-in-reverse")

function problemNine(event) {
  let paste = (event.clipboardData || window.clipboardData).getData('text');
  const reversedPaste = paste.split('').reverse().join('')

  event.preventDefault();

  const pastePlace = ninePasteInReverse.querySelector('input')
  pastePlace.value = reversedPaste

}

// reference the elment "#paste-in-reverse" and add an eventlistener for the paste event:
ninePasteInReverse.querySelector('input').addEventListener('paste', problemNine)

/* ---------------------------------------- */

const tenToggleCheckbox = document.getElementById('toggle-checkbox')

function problemTen(event) {
  const targetElement = tenToggleCheckbox.querySelector('.target-element')
  targetElement.classList.toggle('hidden')

}

// reference the elment "#show-hide" and add an eventlistener for the change event:
tenToggleCheckbox.querySelector('input[type=checkbox]').addEventListener('change', problemTen)

/* ---------------------------------------- */

const elevenToggleSubmit = document.getElementById('prevent-submit')

function problemEleven(event) {
  event.preventDefault();

  const form = event.target;

  const formEmail = form.querySelector('input[type=email]')
  const formPassword = form.querySelector('input[type=password]')

  elevenToggleSubmit.querySelector('.user-email').innerText = 'Email: ' + formEmail.value
  elevenToggleSubmit.querySelector('.user-password').innerText = 'Password: ' + formPassword.value

}

elevenToggleSubmit.querySelector('form').addEventListener('submit', problemEleven)

/* ---------------------------------------- */

const twelveFormTemplate = document.getElementById('target-for-form-template')

const createInputElement = (identifyer) => {
  const input = document.createElement('input')
  input.name = identifyer
  input.placeholder = identifyer
  return input
}

const createSubmitBtn = (identifyer) => {
  const btn = document.createElement('button')
  btn.type = identifyer
  btn.name = identifyer
  btn.innerText = 'Submit'
  return btn
}

function getInputValue(name) {
  return twelveFormTemplate.querySelector(`input[name=${name}]`).value
}

function clearInputValue(name) {
  return twelveFormTemplate.querySelector(`input[name=${name}]`).value = ''
}

function problemTwelve() {
  const form = document.createElement('form')
  form.classList.add('twelveForm')
  const nameField = createInputElement('name')
  const addressField = createInputElement('address')
  const phoneField = createInputElement('phone')
  const submitBtn = createSubmitBtn('submit')

  form.append(nameField, addressField, phoneField, submitBtn)
  twelveFormTemplate.append(form)

  form.addEventListener('submit', twelveSubmit)
}

function twelveSubmit(event) {
  event.preventDefault()

  let nameFieldValue = getInputValue('name')
  let addressFieldValue = getInputValue('address')
  let phoneFieldValue = getInputValue('phone')

  alert(`Name: ${nameFieldValue} \nAddress: ${addressFieldValue} \nPhone: ${phoneFieldValue}`)

  clearInputValue('name')
  clearInputValue('address')
  clearInputValue('phone')
}

document.onload = problemTwelve()
