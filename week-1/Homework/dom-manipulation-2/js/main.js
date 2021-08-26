/* task 1 */

const blueBtn = document.querySelector('#blueBtn')
const orangeBtn = document.querySelector('#orangeBtn')
const greenBtn = document.querySelector('#greenBtn')
const jumbotron = document.querySelector('.jumbotron')
const btnLrg = document.querySelector('.btn-lrg')
const btnSecondary = document.querySelector('.btn-secondary')

const chgColor = (color1, color2, color3, color4 = 'black') => {
  jumbotron.style.backgroundColor = color1
  btnLrg.style.backgroundColor = color2
  btnSecondary.style.backgroundColor = color3
  btnSecondary.style.color = color4
}

/* cambia color jumbotron */

blueBtn.addEventListener('click', e => {
  e.preventDefault()
  chgColor('#588fbd', '#ffa500', 'black', 'white')
})

orangeBtn.addEventListener('click', e => {
  e.preventDefault()
  chgColor('#f0ad4e', '#5751fd', '#31b0d5', 'white')
})

greenBtn.addEventListener('click', e => {
  e.preventDefault()
  chgColor('#87ca8a', 'black', '#8c9c08')
})

/* Task 2 

const mail = document.querySelector('#exampleInputEmail1')
const name = document.querySelector('#example-text-input')
const area = document.querySelector('#exampleTextarea')
const submit = document.querySelector('form button')

function login () {
  if (
    mail.value.length &&
    name.value.length &&
    area.value.length > 0 &&
    mail.value.includes('@')
  ) {
    mail.style.border = ''
    name.style.border = ''
    area.style.border = ''
  } else {
    mail.style.border = '2px solid red'
    name.style.border = '2px solid red'
    area.style.border = '2px solid red'
  }
}

submit.addEventListener('click', (e) => {
  e.preventDefault()
  if (
    mail.value.length &&
    name.value.length &&
    area.value.length > 0 &&
    mail.value.includes('@')
  ) {
    mail.value = ''
    name.value = ''
    area.value = ''
    mail.style.border = '1px solid blue'
    name.style.border = '1px solid blue'
    area.style.border = '1px solid blue'
    alert('Thank you for filling out the form')
  } else {
    mail.addEventListener('focusout', login())
    name.addEventListener('focusout', login())
    mail.addEventListener('focusout', login())
    alert('you must fill all the form')
  }
})


/* Other option  Task 2 */

const checkInputs = (inputs) => {
  inputs.forEach((input) => {
    if (inputs.value === "") {
      input.style.backgroundColor = "red";
    }
  });
};

const checkLengthAndDisplayAlert = (email, name , description, inputs) => {
  if(checkEmail(email)){
  if (email.value !== "" && name.value !== "" && description.value !== "") {
    inputs.forEach((input) => {
      input.value = "";
      input.style.backgroundColor = 'fff'
    });
    alert ('Thank you for filling out the form');
  }
  } else {
    email.style.backgroundColor = "red"
  }
};

const checkEmail = (email) => {
  return email.value.includes("@");
};

document.querySelector('form').addEventListener('submit', (e) => {
 e.preventDefault();
 const email = e.target.elements.exampleInputEmail1;
 const name = e.target.elements.exampleTextInput;
 const description = e.target.elements.exampleTextArea;
 const inputs = [email, name , description];

 checkInputs(inputs);
 checkLengthAndDisplayAlert(email, name, description, inputs)
})