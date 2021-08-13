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

blueBtn.addEventListener('click', (e )=> {
  e.preventDefault()
  chgColor('#588fbd', '#ffa500', 'black' ,'white')
})

orangeBtn.addEventListener('click', (e) => {
  e.preventDefault()
  chgColor('#f0ad4e', '#5751fd', '#31b0d5', 'white')
})

greenBtn.addEventListener('click', (e) => {
    e.preventDefault()
    chgColor('#87ca8a','black' , '#8c9c08')
  })
