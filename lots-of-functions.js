//SayHi
function sayHi(name){
    let newStr = `Hi, ${name}`;
    return newStr;
}
// console.log(sayHi("Geter"));
// console.log(sayHi("Sharvez"));

//bigString

function bigString(Str1, Str2){

    if(Str1.length > Str2.length){
        return Str1;
    }else if(Str1.length < Str2.length){
        return Str2;
    }else if (Str1.length === Str2.length){
        console.log(`${Str1} is equal in length to, ${Str2}`);
    }
}
// console.log(bigString("blue", "green"))
// console.log(bigString("taco", "tuesday"))
// bigString('dog', 'cat')

//BigNumber

function bigNumber(num1, num2){
    if(num1 > num2){
        return num1; 
    }else if(num2 > num1){
        return num2
    }else if (num1 === num2){
        console.log(`${num1} is equal to, ${num2}`) 
    }
}
// console.log(bigNumber(532,287))
// console.log(bigNumber(100,250))
// console.log(bigNumber(5,5))

//fiveMore
let numsArray = [5,3,58,4,6]

function fiveMore(numsArray){
    for(let i = 0; i < numsArray.length; i++){
        if(numsArray[i] % 2 !== 0){
            numsArray[i] += 5;
        }
       
    }
    return numsArray;
}
// console.log(fiveMore([1,2,3,4]));
// console.log(fiveMore([1,3,5,7]))
// console.log(fiveMore([2,22,222]))

//ArraySummer

let sum = 0;
function arraySummer(numsArray){
    for(i = 0; i < numsArray.length; i++){
     sum += numsArray[i]
    }
    return sum
}
// console.log(arraySummer([1,1,1,1]))

//everyDivisble

function everyDivisble(n){
   if(n < 10){
    for(let number = 1; number <= 100; number++){
        if(number % n === 0){
            console.log(number)
        }
    }
}
}
everyDivisble(7);











/*
function name: everyDivisble
parameter: n < 10

for loop
for(i=0; i<100; i++)
if(number % n === 0){
    console.log(number)
}
*/



//Write a function called `everyDivisible` that takes in a 
//number `n` that is less than 10 and then prints 
//every number less than or equal to 100 that is divisible 
//that number `n`.



//Write a function called `arraySummer` that takes 
//in an array of numbers and 
//adds each number in the array together.  Return the total.





//Write a function called `fiveMore` that takes in an 
//array of numbers and adds 5 
//to each odd number then returns the updated array.

//-add 5 to each odd Number.  Loop!
//numsArray.length

//Write a function called `bigNumber` that takes in 2 numbers 
//and returns which one is greater. 
//If the numbers are equal tell the user.





//Write a function called `bigString` that takes in 2 
//strings and returns which one is bigger.  
//If the strings are equal in size, tell the user and prints both.

/*
function name - bigString
parameters: Str1, Str2
return: string
*/


//function name - sayHi
//parameters: nameStr- string
//return: string
//concatenation 
// interpolation



//Write a function called `sayHi` that takes in a
 //name string and adds "Hi, " before the name.  
 //Return the newly modified string.
