//variables in java Script 
//there are three methods to declaring a variable in javascript 
//1. var              2.Let                 3.const
console.log('using var keyword :');
var name = "Abdul Rehman";
var age = 18;
name = "Asif Taj";//redeclaring the variable
console.log(name,age);
console.log(age);
let year = 2004;
{
    let year  = 2024;
    console.log(year);//in js,the let keyword is used in block concept in which the scope of the variable remains in the scope.
    //when you want to use the variable outside of the scope then you redeclares it.
}
console.log(year);
const gpa = 3.4;
gpa = 4;//this statement thows an error 
//bcz const keyword is used as a constant in javascript,Once you assign the value you cannot vchange the value when you wnat to change it then it throws the error.