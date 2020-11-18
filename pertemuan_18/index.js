//Array
// let nilai1 = 90;
// let nilai2 = 80;
// let nilai3 = 75;
// let nilai4 = 100;
// let nilai5 = 85;

let nilai = [90, 80, 75, 100, 85];
for(let i=0;i<nilai.length;i++) {
    console.log("Nilai=", nilai[i] + 5);
}
console.log(nilai);
// nilai[2] = 90;
// console.log(nilai[nilai.length-1]);

let John = ["John", "Doe", 33, true];
console.log(John[John.length-1]);
console.log(John);

//toString:
console.log(John.toString());

//join:
console.log(John.join("-"));

//pop:
John.pop();
console.log(John.join("-"));

//push:
John.push(true);
John.push("Hello");
console.log(John.join("-"));

//shift:
John.shift();
console.log(John.join("-"));

//unshift:
John.unshift("John");
John.unshift("Prof");
console.log(John.join("-"));



