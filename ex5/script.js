// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp


// get elements and assign them to variables/const
var buttonEl = document.getElementById("myButton")
var boxEl = document.getElementById('boxContainer')
console.log(boxEl)

// Create function as action when button is clicked
function clickOnBtn (){
    // Solution 1: us inner HTML string
    boxEl.innerHTML += '<div class="box"></div>'
    
    // Solution 2: use DOM APIs
    let newBoxEl = document.createElement('div')
    newBoxEl.className = 'box'
    boxEl.appendChild(newBoxEl)
}

// assign function to the button when it is clicked
buttonEl.addEventListener('click', clickOnBtn)

