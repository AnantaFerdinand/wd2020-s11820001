console.log("Basic JavaScript");
//Conditional JavaScript (if,else if, else, switch case):

let firstName = "John";
let isMarried = true;
// let isMarried = false;

if(isMarried){
    console.log(firstName + " is married");
} 
else {
    console.log(firstName + " is not married");
}

/*
Jika umur < 13 tahun, maka tampilkan kategori anak-anak.
Jika umur 13-16 tahun, maka tampilkan kategori remaja. 
Jika umur 17-25 tahun, maka tampilkan kategori anak muda.
Jika umur 26-50 tahun, maka tampilkan kategori dewasa.
*/

let umur = 29;
// if(umur < 13){
//     console.log("Kategori anak-anak");
// }else if(umur >=13 && umur < 17){
// console.log("Kategori remaja");
// }else if(umur >=17 && umur < 26){
//     console.log("Kategori anak muda");
// }else if(umur >=26 && umur < 50){
//     console.log("Kategori dewasa");
// }
switch(true){
    case umur < 13:
    console.log("Kategori anak-anak");
    break;

    case umur >=13 && umur < 17:
    console.log("Kategori remaja");
    break;

    case umur >=17 && umur < 26:
    console.log("Kategori anak muda");
    break;

    case umur >=26 && umur < 50:
    console.log("Kategori dewasa");
    break;

    default: console.log("Tidak ada dalam Range umur");
    break;
}

let secondName = "Alex";
let job = "teacher";
switch(job){
case "teacher":  
console.log(secondName + " is a teacher");
break;

case "driver": 
console.log(secondName + " is a driver");
break;

case "instructor": 
console.log(secondName + " is a instructor");
break;

default: console.log(secondName + "does something else");
break;
}

//Function JavaScript (Global scope, hoisting function, and etc.):

// function helloWorld(){
//     console.log("Hello World function declaration");
// }

let helloWorld = function(nama){
    // console.log("Hello World function expression");
    let age = 24;
    console.log("Hello nama saya " + nama + 
                ". Umur saya adalah " + age +
                " tahun.");
}; helloWorld("Ananta Ferdinand");