function welcomeUser(){
 let userName = prompt("What is your name?");
 document.querySelector("h1").innerText = `Welcome, ${userName}`;

 let ranCol = Math.floor(Math.random()*360);
 document.querySelector("h1").style.color = `hsl(${ranCol}, 80%, 60%)`;

 if(ranCol < 180){
    document.body.style.backgroundColor = `hsl(${ranCol + 180}, 80%, 90%)`;
 }
 else{
    document.body.style.backgroundColor = `hsl(${ranCol - 180}, 80%, 90%)`;
 }
}


document.querySelector("button").addEventListener("click", welcomeUser);