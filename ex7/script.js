// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var secHdr = document.getElementById('section-header')
var secBody = document.getElementById('section')
var secBodyVisibility = 'True'

secHdr.addEventListener('click', function(){
    secBodyVisibility = !secBodyVisibility
    console.log(secBodyVisibility)
    if (secBodyVisibility){
        secBody.style.height = 'auto'
        secBody.style.visibility = 'visible'
        // secBody.style.transition = 'height 3s linear'
    } else {
        secBody.style.height = '0px'
        secBody.style.visibility = 'hidden'
        // secBody.style.transition = 'height 3s linear'
    }
});