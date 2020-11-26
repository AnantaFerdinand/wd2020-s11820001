let title = document.getElementsByTagName("h1") [0].innerText;

title = document.getElementById("header2").innerText;
console.log(title);

let umur = document.getElementById("umur").value;
console.log(umur);

function helloWorld(){
    let value = document.getElementById("umur").value;
    document.getElementsByTagName("p")[1].innerText = value;
    document.querySelector(".header").style.color = "red";
    document.querySelector(".header").style.fontSize = "3em";
    document.querySelector(".header").style.backgroundColor = "yellow";
    
    let span = document.getElementsByTagName("span") [0];
    span.style.color="green";
}

