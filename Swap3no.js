// Write Program to Swap Values of Three variables like that.
// Input : ( x = 3 , y = 4 , z = 5)
// output : (x = 4 , y = 5 , z = 3)
console.log('Values Before Swapping :');
let x=3,y=4,z=5;  //Declaring the variables 
console.log("x =",x,"y =",y,"z =",z);
x=y;    //we used associative property for swapping 
y=z;    //such as a=b , b=c , c =a;
z=x;
console.log('Values After The Swapping :');
console.log("x =",x,"y =",y,"z =",z);