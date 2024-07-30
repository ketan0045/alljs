//  b@@@@k112222

// 3. what is variable ? -container to store data value

var number1 = 34;
var number2 = 56;
//  console.log(number1 + number2);

// 4. data type in javascript
// number
var num1 = 455;
var num2 = 56.76


// string
var str1 = "this is a string";
var str2 = 'this is also a string';

//object
var marks = {
    ravi: 34,
    shubam: 78,
    raj: 78.78
}
// console.log(marks);

//BOOLEAN 

var a = true;
var b = false;
// console.log(a,b);

// var und = undefined
var und;
// console.log(und);


var n = null;
// console.log(n);


/*
At a very high level, there are two types of data types in javascript 
1.primitive data types :undefined ,null, number,string, boolean, Symbol
2.refrence data types  :arrays and objects
*/

// var arr = [1,2,"fff",4,5]
// console.log(arr)


// console.log(arr[3])



// operater in javascript
// arithmetic operattors
// var a =100;
// var b= 10;

// console.log("the value of a + b is ", a+b);
// console.log("the value of a + b is ", a-b);
// console.log("the value of a + b is ", a*b);
// console.log("the value of a + b is ", a/b);

// assigment operaters
var c = b;
//  c += 2;
//  c -= 2;    
//  c *= 2;
//  c /= 2;
//  console.log(c)

//comparison operators
var x = 34;
var y = 65;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);


// logical operate
//  and&,orll,not ! OPPOJIT,


// function in javascript


function avg(a, b) {
    return (a + b) / 2;
}

// DRY = do not repeat  your self
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1,c2);

// orrrrr//

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1,c2);

// conditional in javascript


var age = 41;
// single if statement
// if (age >18){
//     console.log('you can drink rasna water');
// }


//  if- else statement 
//  if (age>18){
//      console.log('you can drink rasna water')
//  }
// else{
//     console.log('you cannot drink rasna water');
// }


// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for ( var i=0;i < arr.length;i++){
//     if(i==4){
//     //  break;
//     continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// let j =0;
// while(j < arr.length){
//     console.log(arr[j]);
//     j++;
// }


// do{
//     console.log(arr[j]);
//     j++;
// }while (j < arr.length);


// let myArr = ["fan","camera",34,null,true];

// array method
           
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// myArr.push("hhhhh");
// myArr.shift();
// console.log(myArr.unshift("gggg"));
// console.log(myArr);



// string method in javascript


let mylovelystring = "harry is a good boy good good";
// console.log(mylovelystring);
// console.log(mylovelystring.length);
// console.log(mylovelystring.indexOf("good"));
// console.log(mylovelystring.lastIndexOf("good"))


// console.log(mylovelystring.slice(1,4))
// replace

//  let mydate = new Date();
// console.log(mydate);......and many day,mintus,hours

// DOM manipulation

 let elem = document.getElementById('click');
//  console.log( elem);

 let elemclass = document.getElementsByClassName('container');
//  console.log( elemclass);

// elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary")
elemclass[0].classList.add("text-success")




// console.log(elem.innerHTML);
// console.log(elem.innerText);



// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

// tn = Document.getElementsBytagName("button")
// console.log(tn)

// [add child and remove child] learn




// selecting using query h and p changes maate allQ USE


// sel = document.querySelector('.container')
// console.log(sel);

// sel = document.querySelectorAll('.container')
// console.log(sel);


// function clicked(){
//     console.log('the batton was clicked')
// }

// window.onload = function(){
//     console.log('the document was loaaded')
// }

// event in javascript upar na 2 bhi

// firstcontainer.addEventListener('click',function(){
//     console.log("click on container hua")
// })

// firstcontainer.addEventListener('mouseover',function(){
//     console.log("mouse on container ")
// })

// firstcontainer.addEventListener('mouseout',function(){
//     console.log("mouse out of container")
// })


// firstcontainer.addEventListener('mouseout',function(){
//     console.log("mouse out of container")
// })


// firstcontainer.addEventListener('mousedoen',function(){
//     console.log("mouse down when clicked on container")
// })


// arrow function


// function summ(a,b){
//     return a+b;
// }

// multi= (a,b)=>{
//     return a*b;
// }
// d =multi(2,8);
// console.log(d);

// setTimeout and setinterval


// logkaro =()=>{
//     console.log('i am your log')
// }

// setTimeout(logkaro,2000);
// clr = setInterval (logkaro,2000);
 
// use clearInterval/clearTimeout to cancel setInterval/setTimeout
// clr = setInterval (logkaro,2000);


// javascript localstorage

// localStorage.setItem('name','harry')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// JSON

// obj = {name: "harry",length:1, a:{this:"that"}}
// jso = JSON.stringify(  obj);
// console.log(typeof jso)
// console.log(jso)

// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed );


// template literals - backticks

// a =34;                                                                                                                                                                               
// console.log(`this is my ${a}`   );



// a = new Date()
// console.log(a);


// practice

// const arr = "foo"
// const hhhhh = Array.from(arr);
// console.log(hhhhh);









// -> Array.prototype.concat()
// -> Array.prototype.copyWithin()
// -> Array.prototype.entries()
// -> Array.prototype.every()
// -> Array.prototype.fill()
// -> Array.prototype.findIndex()
// -> Array.prototype.flat()
// -> Array.prototype.groupBy()
// -> Array.prototype.includes()
// -> Array.prototype.join()
// -> Array.prototype.keys()
// -> Array.prototype.fill()
// -> Array.prototype.includes()
// -> Array.prototype.flatMap()

// -> Array.prototype.reduceRight()
// -> Array.prototype.some()
// -> Array.prototype.toLocaleString()
// -> Array.prototype.toSource()
// -> Array.prototype.values()



// Hello Sir,
// Work updates on date 25-05-2022 as below:
//  ===
// =>learn about Array other methode
// -> Array.prototype.concat()
// -> Array.prototype.copyWithin()
// -> Array.prototype.entries()
// -> Array.prototype.every()
// -> Array.prototype.fill()
// -> Array.prototype.findIndex()
// -> Array.prototype.flat()
// -> Array.prototype.groupBy()
// -> Array.prototype.includes()
// -> Array.prototype.join()
// -> Array.prototype.keys()
// -> Array.prototype.fill()
// -> Array.prototype.includes()
// -> Array.prototype.flatMap()
// ===

// practice

// const solve=(age)=>{
//     return age*365
//  }
//  console.log(solve(21))

//  function age(detail){
//     return detail*365
//   }
//   console.log(age(20))



//   1. Create a calc named function which will perform 4 action like add,sub,multiply and division.
// 2. User will pass only three params. first value, second value and action type like calc(11,12,"add") and this should log 23 in output.


// function calc(a,b,action){
//     switch(action){
//       case "add":
//         return a+b;
//       case "sub":
//         return a-b;
//       case "mul":
//         return a*b;
//       case "div":
//         return a/b;
//       default:
//       return "Action not found";
//       break;
//     }    
//   }
//   console.log(calc(12,14,"div"));


// const day =(convert)=>{
//     return convert*365*24*60*60*1000
//   }
//   console.log(day(65))

  	
  
  
// //   hours into second
  
// //   const howmanySecond=(hour)=>{
// //       return hour * 60 * 60
// //   }
// //   console.log(howmanySecond(2))

// //   day vala

// //   const day= (age)=>{
// //     return age * 365
// //   }
// //   console.log(day(35))


// // 1
// function avg(arr){
//     return arr.slice(0,1);
// }

// console.log(avg([1,2,3,4,5,6,7,8,9]));

// // 1....
// function avg(arr, n=1){
//     return arr.slice(0,n);
// }
// arr = [1,2,3,4,5,6,7,8,9];
// result = avg (arr,1);
// console.log(result);


// 2/
// function myFunction(name) {
//   return "something " + name;
// }
// console.log(myFunction("is better than nothing"))




// 3
// function printArray(number) {
//     var newArray = [];
//     for(var i = 1; i <= number; i++) {
//       newArray.push(i);
//     }
//     return newArray;
//   }
//   console.log(printArray(12))








//   var a = 1,
//     b = 2,
//     tmp;
// tmp = a;
// a = b;
// b = tmp;
// console.log(a)
// console.log(b)

// var a = 1,
//     b = 2,
// a=a+b;
// b=a-b;
// a=a-b;
//  console.log(a)
//  console.log(b)

// third variabble 
// var a = 1,
//     b = 2,
//     c = a;
// a = b;
// b = c;
// console.log(a)
// console.log(b)

// es6
// var a = 1, b = 2;
// [a, b] = [b, a];
// console.log(a, b);

4//
  
// function swap(a, b) {
//     let swapping = [a,b]=[b,a]
//    return swapping 
// }
// console.log(swap(1,2))





 









 
