const form = document.querySelector('form');
const input = document.querySelector('#input');
const counter = document.querySelector('#count');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value;
    if(isNaN(value)){
        alert("Please enter a number between  1 and 10");
        return false;
        func()
}});

const func =  ()=>{
    counter.innerHTML= 16 - input.value.length;
    if (input.value.length <0) counter.innerHTML= 0;

    
}
input.addEventListener('keyup', func);
func()