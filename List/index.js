const button = document.getElementById("button");
const input = document.getElementById("input");
const ul = document.getElementById("list");
const alert = document.getElementById("alert");
alert.style.display ="none"; 

let i = 1;

button.addEventListener("click", run);

function run(e){
    const val = input.value;
    if (val){
        ul.innerHTML += `
        <li>${val}</li>
        `
        input.value = ""
        alert.style.display ="none"; 
    }
    else{
        alert.textContent = "Please provide the valid input";
        alert.style.display ="block"; 

    }
    RedColor();

    e.preventDefault(0);
}


function RedColor(){
    if (i % 3 === 0){
        document.querySelectorAll("li")[i - 1].style.color = "red";
    }
    i++;
}