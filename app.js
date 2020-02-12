const phone = document.querySelector(".phone")
const screen = document.querySelector(".screen span")
const nums = document.querySelector(".numbers");
const keypad = document.querySelector("#keypad");
const callBtn = document.querySelector(".call");



// add event listener to numbers
// then display on screen


nums.addEventListener('click', function(e){

    // check if button is clicked
if(e.target.nodeName == "BUTTON"){
    let currentBnt = e.target;
  
    // decrease font size
    if(screen.textContent.length > 7){
        screen.style.fontSize = "1.5em";
    }

    // limit display lenght
  if(screen.textContent.length > 11){
      return;
  }

    // display on screen;
    screen.textContent += currentBnt.textContent.slice(0,1)
}

})



// keypad hide - show screen

keypad.addEventListener('click', function(e){
    nums.classList.toggle("hide")
   screen.classList.toggle("hide")
   callBtn.classList.toggle("hide")
   phone.classList.toggle('add-bg')

})

