let inputs = document.querySelector("input");
let error = document.querySelector(".error");
let button = document.querySelector("button");

function checkInput(){
    let email = document.querySelector('input').value;
    let regex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(regex.test(email) != true){
        inputs.style.border ="1px solid red";
        error.style.display ="block";
        // alert("Name cant be blank");
    }else{
        inputs.style.border ="1px solid blue",
        error.style.display ="none",
        alert("success")
    }
}

button.addEventListener("click", checkInput)


let inputs2 = document.querySelector("#input");
let error2 = document.querySelector(".error1");
let button2 = document.querySelector(".button2");
let confirmx = document.querySelector(".confirmed");

function checkInput2(){
    let email2 = document.querySelector('#input').value;
    let regex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(regex.test(email2) != true){
        inputs2.style.border ="1px solid red";
        error2.style.display ="block";
        // alert("Name cant be blank");
    }else{
        inputs2.style.border ="1px solid blue",
        error2.style.color = "#fff",
        error2.textContent= "Please check your email"
        error2.style.display ="block"
    }
}
button2.addEventListener("click", checkInput2);