function first(){
let num=prompt("Enter number")
if(num>=80 && num<=120 || num>=380 && num<=420)
    console.log("true")
else
   console.log("false")
}
// first();

function second(){
    let num1=prompt("Enter first number");
    let num2=prompt("Enter second number");
     if((num1>0 && num2<0) || (num1<0 && num2>0) )
        console.log("true")
    else
    console.log("false")
}
// second();

function Py(){
    const str=prompt("Enter string")
      if(str.startsWith("Py")) 
        console.log(str)
    else
console.log("Py"+str)   
}
// Py();

function last(){
    const num1=prompt("Enter first number")
    const num2=prompt("Enter second number")

    if((num1-num2)==8 || (num1+num2)==8 || num1==8 || num2==8)
        console.log("true")
    else
    console.log("false")
}
last();

function lastDigit(){
  const num1=prompt("Enter first number")
  const num2=prompt("Enter second number")
  const num3=prompt("Enter third number")
    if((num1%10 ==num2%10) && (num2%10==num3%10))
        console.log("true")
    else
    console.log("false")
}
// lastDigit();

function removeCharacter(){
    const str=prompt("Enter string")
   const pos=prompt("Enter pos")
  const newStr =str.replace(str.charAt(pos),"");
   console.log(newStr)
}
// removeCharacter();

function multipleOfNumber(){
    const num1=prompt("Enter number")
    if(num1%3==0 || num1%7==0)
        console.log("true")
    else
    console.log("false");
}
// multipleOfNumber();

function startsWith(){
    const str=prompt("Enter string")
    if(str.startsWith("java"))
        console.log("true")
      else
    console.log("false");
}
// startsWith();

function eight(){
    const num1=prompt("Enter first number")
    const num2=prompt("Enter second number")
    if(num1>num2 && num1!=num2)
        console.log(num1)
    else
    console.log(num2);
}
// eight();

function closerToHundred(){
    const num1=prompt("Enter first number")
    const num2=prompt("Enter second number")
    if( Math.abs(100-num1)< Math.abs(100-num2)  )
        console.log(num1)
    else
    console.log(num2)
}
// closerToHundred();
