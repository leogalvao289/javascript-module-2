/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne (arrayOfPeople) {
  let content = document.querySelector('#content')
  arrayOfPeople.forEach(person => {
    const name = document.createElement('h1')
    const job = document.createElement('h2')

    name.textContent = person.name
    job.textContent = person.job

    content.appendChild(name)
    content.appendChild(job)
  })
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

function exerciseTwo (shopping) {
  const content = document.querySelector(
    '#content'
  ) /* seleciona o conteudo da tag  */
  const ulElement = document.createElement(
    'ul'
  ) /* cria o elemento lista desordenada */
  content.appendChild(ulElement)

  shopping.forEach(list => {
    const listElement = document.createElement('li')
    listElement.innerHTML = list
    ulElement.appendChild(listElement)
  })
}

/*
    I'd like to display my three favorite books inside a nice webpage!
*/

/*
    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree (books) {
  const ulDisplay = document.createElement('ul')

  books.forEach(book => {
    const listBooks = document.createElement('li')
    const bookObj = document.createElement('p')
    bookObj.textContent = `${book.title}` - `${book.author}`; /* insere o conteudo na tag criada */
    const bookCapa = document.createElement('img') /* cria o elemento */ 
    bookCapa.setAttribute('src', book.image) /* insere a imagem */
    
    listBooks.appendChild(bookObj)
    listBooks.appendChild(bookCapa)
    ulDisplay.appendChild(listBooks)
  })
  document.body.appendChild(ulDisplay)
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: 'Chris', job: 'Teacher' },
  { name: 'Joanna', job: 'Student' },
  { name: 'Boris', job: 'Prime Minister' }
]

exerciseOne(people)

let shopping = ['Milk', 'Break', 'Eggs', 'A Dinosaur', 'Cake', 'Sugar', 'Tea']

exerciseTwo(shopping)

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    image: './img/every.jpg'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    image: './img/human.jpg'
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    image: './img/programmer.jpg'
  }
]

exerciseThree(books)
