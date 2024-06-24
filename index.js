//Question 1
let price = 200;
let product = 'Unga ya Dola'
let isAvailable = true;

console.log(typeof price);
console.log(typeof product);
console.log(typeof isAvailable);


//Question 2
const num = [30 ,90 ,590 ,1000];
const car = {
    make : 'Jeep',
    model : 'Wrangler',
    year : 2024
};
console.log(car);

car.year = 2020;
console.log(car);

car.make = 'Porsche';
console.log(car);


//Question 3
let a = 25;
let b = '25';

console.log (a==b);
console.log (a===b);
// == operator compares the 2 variables without performing the typeOf conversion
// === operator compares the 2 variables after performing the typeOf


//Question 4
let str1 = 'RobinWere';
let str2 = 'Emmanuel';

if (str1.length > str2.length){
    console.log('str1 is lexicographically longer than another string str2');
}else{
    console.log('str1 is lexicographically smaller than another string str2');
};


//Question 5
let age = 44;

if (age < 13){
    console.log('child');
}else if (age >= 13 && age <= 19){
    console.log('Teenager');
}else {
    console.log('Adult')
};

//Question 6
let score = 50;

if (score >= 90){
    console.log('A');
}else if (score >= 80 && score <= 89){
    console.log('B');
}else if (score >= 70 && score <= 79){
    console.log('C');
}else if (score >= 60 && score <= 69){
    console.log('D');
}else {
    console.log ('F');
};

//Question 7
let numb = -40;

if (numb >= 0 && numb % 2 == 0){
    console.log('The number is positive and even.');
}else {
    console.log ('The number does not meet both conditions.');
};


//Question 8
let isAdmin = false;
let isSubscribed = true;


if( isAdmin || isSubscribed){
    console.log('Access granted!');
}else {
    console.log('Access denied!');
};

//Question 9
for (let i = 1; i <= 20; i++) {
    
    if (i % 3 !== 0) {
        console.log(i); 
    }
}




//Question 10
let dayNumber = 10;

switch (dayNumber){
case 0 :
    console.log('Today is Sunday!');
    break;
case 1 :
    console.log('Today is Monday!');
    break;
case 2 :
    console.log('Today is Tuesday!');
    break;
case 3 :
    console.log('Today is Wednesday!');
    break;
case 4 :
    console.log('Today is Thursday!');
    break;
case 5 :
    console.log('Today is Friday!');
    break;
case 6 :
    console.log('Today is Saturday!');
    break;
default :
    console.log('Not a day of the week.');    

}


//Question 11

const n = 10; 

let sum = 0;
let i = 1;

while (i <= n) {
    sum =sum + i; // Add current value of i to sum
    i++; // Increment i for the next iteration

    /*sum = sum + i
    sum = 0 + 1 = 1
    sum = 1 + 2 = 3
    sum = 3 + 3 = 6
    sum = 6 + 4 = 10
    sum = 10 + 5 = 15
    sum = 15 + 6 = 21
    sum = 21 + 7 = 28
    sum = 28 + 8 = 36
    sum = 36 + 9 = 45
    sum = 45 + 10 = 55 */


}
console.log(`The sum of integers from 1 to ${n} is: ${sum}`);