// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"


// get elements and assign them to variables/const
var buttonEl = document.getElementById("myButton");
var boxEl = document.getElementsByClassName('box')

// Create function as action when button is clicked
function clickOnBtn (){
    let i = 0
    for (i=0;i<boxEl.length;i++){
        boxEl[i].style.backgroundColor = 'blue'
    }
}

// assign function to the button when it is clicked
buttonEl.addEventListener('click', clickOnBtn)


