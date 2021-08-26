/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6 */

let paragraph = document.querySelectorAll('p')

console.log('La longitud es igual a 6 ', paragraph.length === 6)

/*
    2. the first div element node
    --> should log the ".site-header" node */

let siteheader = document.querySelector('.site-header')
console.log(siteheader)

/*    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node */

let jumbotron = document.querySelector('#jumbotron-text')
console.log(jumbotron)

/*  4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3 */

let matches = document.querySelectorAll('.primary-content  p')

console.log(matches.length === 3)
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let button = document.getElementById('alertBtn')
button.addEventListener('click', mostrarAlerta)

function mostrarAlerta () {
  alert('Thanks for visiting Bikes for Refugees!')
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const but = document.getElementById('bgrChangeBtn')
but.addEventListener('click', event => {
    clicar(event)
})

function clicar (event, color) {
    const arrColors = ['blue', 'orange' , 'red' , 'yellow']
    event.preventDefault();
    const body = document.querySelector('body');
    const bodyColor = body.style.backgroundColor;
    let colorIndex = arrColors.indexOf(bodyColor);

    if (colorIndex === -1 || (colorIndex === arrColors.length -1)) {
       body.style.backgroundColor = color || arrColors[0];
    } else {
        body.style.backgroundColor = color || arrColors[colorIndex + 1];
}
}
/*function exit () {
  body.style.backgroundColor = 'white'
}
function enter () {
  body.style.backgroundcolor = 'red'
}/*
/*
Task 4
======
When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE” */

const addTextBcn = document.querySelector('#addtextBtn') // llamo el boton con la Jquery

addTextBcn.addEventListener('click', () => {
  addP('hi everyone');
})

function addP (text) {
  const pContainer = document.querySelector('#mainArticles')
  const para = document.createElement('p') // const para crear el elemento para insertar
  para.textContent = text || 'lorem ipsum'  // tomara el valor por defecto 
  pContainer.appendChild(para)
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const largerLinksBtn = document.querySelector('#largerLinksBtn') // Declaro el boton
largerLinksBtn.addEventListener('click', function () {
  // agrego la funcion con evento si dan click
  const linksMenu = Array.from(document.querySelectorAll('a')) // convertir un nodeList en una matriz con Array.from

  linksMenu.forEach(linksElement => {
    linksElement.style.fontSize = 25
  })
})

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const addBtn = document.querySelector('#addArticleBtn')
addBtn.addEventListener('click', ()=> {
    const textInput = document.querySelector('input');
    const inputValue = textInput.value;

addP(inputValue)
textInput.value = ""
})

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const arrColors = ['blue', 'orange' , 'red' , 'yellow', 'black'] 

const but = document.getElementById('bgrChangeBtn')
but.addEventListener('click', event => {
    clicar(event)
})

function clicar (event, color) {
    const arrColors = ['blue', 'orange' , 'red' , 'yellow']
    event.preventDefault();
    const body = document.querySelector('body');
    const bodyColor = body.style.backgroundColor;
    let colorIndex = arrColors.indexOf(bodyColor);

    if (colorIndex === -1 || (colorIndex === arrColors.length -1)) {
       body.style.backgroundColor = color || arrColors[0];
    } else {
        body.style.backgroundColor = color || arrColors[colorIndex + 1];
}
}