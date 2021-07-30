/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6 */

let paragraph = document.querySelectorAll('p')

console.log(paragraph)

/*
    2. the first div element node
    --> should log the ".site-header" node */

let siteheader = document.querySelector('.site-header')
siteheader.style.background = 'blue'

console.log(siteheader)

/*    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node */

let jumbotron = document.querySelector('#jumbotron-text')
jumbotron.style.background = 'green'

console.log(jumbotron)

/*  4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3 */
    
    let matches = document.querySelectorAll(".primary-content > p");

   console.log(matches)
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
let but = document.getElementById('alertBtn')
but.addEventListener('click', clicar)
but.addEventListener('mouseenter', enter)
but.addEventListener('mouseout', exit)

function clicar () {
    but.style.background = 'red'
}
function exit () {
    but.style.background = 'white'
}
function enter () {
    but.style.background = 'red'
}
/*
Task 4
======
When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE” */
let botao = document.getElementById ('addArticleBtn')
botao.addEventListener('click', addPara)

function addPara() {
    let h = document.createElement("p");
    let t = document.createTextNode("");
    h.appendChild(t);
    document.body.appendChild(h);
  }

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let largerLinksBtn = document.getElementById ('largerLinksBtn')
largerLinksBtn.addEventListener('click' , fonte)

function fonte(e){
	let elemento = $(".facebook-link");
	let fonte = elemento.css('font-size');
	e == elemento.css("fontSize", parseInt(fonte) + 1);
}
	

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/



/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
