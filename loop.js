//Printing 1-10 using for loop

let elem = document.getElementById("for10");

let result = "";

for (let i = 1; i <= 10; i++){
    console.log(i);
   result += i + '<br>';
}
elem.innerHTML = result; 

// Printing 10 - 1 using while loop

let whileElem = document.getElementById("while10");

let whileResult = "";

let j = 10;

while(j >= 1){
    console.log(j);
    whileResult += j + '<br>';
    j--;
}
whileElem.innerHTML = whileResult;

// Printing Even numbers from 1 - 20 using for loop
let evenNumber = document.getElementById("forEven");
let evenResult = "";

for(let e = 1; e <= 20; e++){
    if( e%2 === 0){
        console.log(e);
        evenResult += e + '<br>'
    }
evenNumber.innerHTML = evenResult;
}


// Printing odd numbers from 1 - 15 using while loop
let whileOdd = document.getElementById("whileOdd");
let oddResult = "";

let o = 1;
while(o <= 15){
    if (o%2 === 1){
    console.log(o);
    oddResult += o +'<br>';
    }
    o++;
    whileOdd.innerHTML = oddResult;
}
