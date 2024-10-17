
function vowel(str){
    let s="";
    str.toLowerCase();
for(i=0;i<str.length;i++){
    if(str.charAt(i)!='a' || str.charAt(i)!='e' || str.charAt(i)!='i' || str.charAt(i)!='o' || str.charAt(i)!='u'){
    s=s+str.charAt(i);
    }
}
  console.log(s);
}
// vowel("amit");

function palindrome(str){
   i=0;
   j=str.length-1;
   while(i<j){
    if(str.charAt(i)!=str.charAt(j)){
          return "not palindrome"
    }
    else{
          i++;j--;
    }
       
   }
   return "Palindrome"

}
// console.log(palindrome("kanak"))

function countOccurence(str){
     let result=new Map();
    for(let i=0;i<str.length;i++){
        if(!result.get(str.charAt(i))){
            result.set(str.charAt(i),1);
        }
        else{
         result.set(str.charAt(i),result.get(str.charAt(i))+1);
        }
    }
    console.log(result);
}
// countOccurence("abcdde")


function substringOccurence(str1,str2){

    let map1=new Map();
    for(let i=0;i<str1.length;i++){
        map1.set(str1.charAt(i),map1.get(str1.charAt(i)) ?? 0 + 1);
    }
    let map2=new Map();
    for(let i=0;i<str2.length;i++){
        map2.set(str2.charAt(i),map2.get(str2.charAt(i)) ?? 0 + 1);
    }
    let s="";
}

// substringOccurence("amit","nami");


function anagram(str1,str2){
    if(str1.length!=str2.length)
        return "Not an anagram"
    let s1=str1.split("").sort().join("");
    let s2=str2.split("").sort().join("");
    for(i=0;i<str1.length;i++){
          if(s1.charAt(i)!=s2.charAt(i))
            return "Not an anagram"
        
    }
    return "Anagram"
    
}
// console.log(anagram("amit","mita"));

function duplication(array){
    let arr1=[];
    for(i=0;i<array.length;i++){
        let userInput=prompt("Enter element");
        array[i]=userInput;
    }
    for(i=0;i<array.length;i++){
        if(!arr1.includes(array[i]))
            arr1.push(array[i]);
    }
    console.log(arr1);

}
// let array =new Array(5);

// duplication(array)

function flattening(array){
    for(i=0;i<array.length;i++){
     newArray=array.flat();
    }
    console.log(newArray);
}
// flattening([[1,2],[3,4],[5,7]]);

function maximum(arr){
    let temp=-1;
    for(i=0;i<arr.length;i++){
       if(arr[i]>temp){
               temp=arr[i];
       }
    }
    console.log(temp);
}
// maximum([1,2,39,4,5])

function commonElement(arr1,arr2){
       arr1.sort();
       arr2.sort();
       let array=[];
       let k=0;
       for(i=0;i<arr1.length;i++){
          for(j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                array[k]=arr1[i];
                k++;
                }
          }
            
       }
       console.log(array);
}
// commonElement([1,2,3,4],[3,2,7,5])

function rotate(arr,pos){
    let arr1=[];
    let arr2=[];
    let k=0;
    let f=0;
    for(i=0;i<arr.length;i++){
       if(i<=pos){
        arr1[k]=arr[i];
        k++;
       }
       else{
      arr2[f]=arr[i];
      f++;
       }
       
 }
 arr2.push(arr1.reverse());

 document.write(arr2)
     
 
}
// rotate([1,2,3,4,5,6],5)



// OBJECTS QUESTION;   ****************************

function DeepClone(){
let student1={
    name:"amit",
    age:21,
    course:"btech"
}

let student2={...student1}
student1.age=22;
console.log(student1)
console.log(student2)
}
// DeepClone();

function mergeObjects(){
    let first={
        name:"amit",
        city:"indore",
        course:"btech"
    }
    let second={
        name:"baghel",
        lname:"xyz",
        city:"hyderabad"
    }
    let combine={...first,...second}
    console.log(combine)
}
// mergeObjects();

 
function keyCount(){
    let ob={
        color:"black",
        brand:"dell",
        ram:"256GB",
        name:"adfjd"
    }
    console.log(Object.keys(ob).length);
}
// keyCount();

function swapKeyValue(){
    let details={
        name:"amit",
        age:23,
        profession:"software developer"
    }
    let newObje={};
        
    Object.entries(details).forEach(entry=>{
        let key=entry[0];
        let value=entry[1];
        newObje[value]=key;
    })
    console.log(newObje)

}
// swapKeyValue();

// $$$$$$$$$$$$$ LOOPS IN JAVASCRIPT

function fibonacci(){
let i,x,y,z;
for(i=0,x=-1,y=1;i<8;i++){
     z=x+y;
     console.log(z+",");
     x=y;
     y=z;
}

}
// fibonacci();

function factorial(){
     n=12;
    for(i=n-1;i>0;i--){
        n=n*i
    }
    console.log(n);
}

// factorial();

function sumOfArray(){
    let arr=[1,2,3,4,5,6];
    temp=0;
    for(a of arr){
        temp=temp+a
    }
    console.log(temp);
}
// sumOfArray();

function prime(){
    n=7;
    for(i=2;i<n;i++){
        if(n%i==0){
            return "Not prime";
        }
    }
    return "prime";
}
// console.log(prime());

function reverse(){
    arr=[1,2,3,4,5];
    i=0;
    j=arr.length-1;
    while(i<j){
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;

        i++;j--;
    }
    console.log(arr)
}
// reverse();

//   function ***********************

//   
   function curring(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
   }
//    console.log(curring(10)(20)(30))

// COMPOSITION FUNCTION
  function add(a,b){
     c=a+b;
    return c;
}
function multiplyByTwo(c){
    return c*2;
}
function composition(f1,f2){
    return function(a,b){
        result1=f1(a,b);
        return f2(result1)
        
    }
}
const result=composition(add,multiplyByTwo)
// console.log(result(2,4));


//  flattening of object

 const details={
    name:"amit",
    age:21,
    address:{
        city:"mumbai",
        state:"maharashtra"
    },
    college:{
        branch:"cs"
    }
 }
 let newObject={};
 function flatObject(data){
    for(keys in data){
        if(typeof data[keys]=="object"){
            flatObject(data[keys])
        }
        else{
            newObject[keys]=data[keys];
        }
    }
 }
//  flatObject(details)
//  console.log(details)
//  console.log(newObject)


// Assignment question &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



const detail=[
    {
        key:"1.0",
        children:[
            {
                keys:"1.1",
                children:[
                    {
                        keys:"1.1.1",
                        children:[
                            {
                                keys:"1.3",
                                children:[
                                    {
                                        keys:"1.4"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                keys:"1.2",
                children:[
                    {
                        keys:"1.2.1",
                        children:[
                            {
                                keys:"1.2.2",
                                children:[
                                    {
                                        keys:"1.4"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                keys:"1.3",
                children:[
                    {
                        keys:"1.2.1",
                        children:[
                            {
                                keys:"1.2.2",
                                children:[
                                    {
                                        keys:"1.4"
                                    },
                                    {
                                        keys:"1.5"
                                    },
                                ]
                            },
                            {

                            }
                        ]
                    },
                     {

                    }
                ]
            }
        ]
    },
    {
        key:"2.0",
        children: []
    },
    {
        key:"3.0",
        children: []
    }
]
    
let selectedKeys = [1.4]

 let newArray=[];
 let count=0;
 function arr(data){
    for(keys in data){
        if(typeof data[keys]=="object"){
            arr(data[keys])
        }
      else  {
        
        if(data[keys]<selectedKeys)
            newArray.push(data[keys])
        }
    }
 }
  arr(detail);

  console.log(newArray)
