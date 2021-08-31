/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp) */

setTimeout(function changeBackGround(){ 
    document.body.style.backgroundColor = "blue"; }, 5000);

/*Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp) 
================
*/
let i = 0 
function backGroundChange () {
 let colors = ['blue', 'red' , 'yellow', 'gray', 'green']
 document.body.style.backgroundColor = colors[i];
 i++ % colors.length;

};

setInterval(backGroundChange, 5000);