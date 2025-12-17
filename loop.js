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

// Printing multiplication table of 5(i..e 5x1, 5x2...) using for loop
let multi5 = document.getElementById("multi5");
let multiResult = "";

for(let m = 1; m <= 10; m++){
    console.log(`5 * ${m} = ${5 * m}`)
    multiResult += (`5 * ${m} = ${5 * m}`) + '<br>'
}
multi5.innerHTML = multiResult;


// Printing sum of numbers from 1 to 100
let sumResult = document.getElementById("sumOf");
let sum = 0;

for(let s = 1; s <= 100; s++){
    sum += s;
}
sumResult.innerHTML = sum;
console.log(sum);



// with while loop
let summ = 0;
let ss = 1;
while(ss <= 100){
    summ += ss;
    ss++; 
}
console.log(sum)

