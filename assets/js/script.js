var x = ''
var display = document.querySelector('#values')
var c = document.querySelector('#clean')


function numDisplay(n) {

    x += n + ' '
    if(x.length <= 30){

        console.log(x)
        display.innerHTML = x

    }
    return x     
  
} 


function clearX() {
 
    display.innerHTML = ' '
    return;
  
}

