console.log("helloworld");

let  a ='red';
let b = 'blue';
//swapping variables
let temp = a;
a = b; 
b = temp;

console.log(a);
console.log(b);

function max( n, m){
    let max = n;
    if(m > n)
        max = m;
        console.log('max is', max)
}
max(10,50);

function square(number){
    return number * number;
}
console.log(` The square is  ${square(3)}`);

console.log(false || 'muwonge');

// short circuiting
let userColor ='red';
let defaultcolor= 'blue';
console.log(userColor || defaultcolor);

// factory function -- used to create objects

function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw circle');
        }
    };

};
const circle1 = createCircle(4);
circle1.draw();
console.log(circle1);

// constructor functions also used to create objects
// we use pascal naming conventon.

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw circle using a constructor function.');
    }
}

const circle = new Circle(5);
circle.draw();
console.log(circle);

// cloning an object
const sphere = {
    radius : 11,
    draw(){
        console.log('draw');
    }

};

// object cloning using the spread operator.
const another = {...sphere};
console.log(another);

// creating date using the date constuctor function.
const now = new Date();
console.log(now.getDate(),now.getDay(),now.getMonth(),now.getFullYear());

//Arrays
const numbers = [3,4];
numbers.push(2,7,8);
console.log("use of various array functions");
console.log(numbers);
//adding at the beginning
numbers.unshift(22,23);
console.log(numbers);

// summing elements in an array using the reduce method.
const nums = [1,-1,2,3];
const sum = nums.reduce(
    (accummulator, curentValue) => accummulator + curentValue
);
console.log("sum of nums array using reduce method is",sum);

// adding multiple arguments
 function adding(...args){
     return args.reduce((a,b) => a+b);

 }

 console.log("lets see  the sum of multiple arguents ............");
 console.log('sum is ',adding(1,2,3,7,9,10));

