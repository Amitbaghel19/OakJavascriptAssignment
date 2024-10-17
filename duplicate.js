 arr=[1,2,3,4,2]

 newArr=[];
 for(i=0;i<arr.length;i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i])
    }
 }
//  console.log(newArr)

arr1=['AAAA','ccccC','Bbbbbb']
 
// console.log(arr)
//  for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length-1;j++){
//       if(arr[j]>arr[j+1]) {
//         let temp=arr[j];
//         arr[j]=arr[j+1];
//         arr[j+1]=temp;
//       } 
//     }
//  }
//  console.log(arr)

arr5=[[1,2,3],[3,4,2],[5,7,3]]
const flattened = [].concat(...arr5);

   console.log(flattened)


