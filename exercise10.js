let array=[1,200,33,49,5,10]
let largest=array[0];
for(let i=1;i<array.length;i++){
  if(largest<array[i]){
    largest=array[i]
  }
}
console.log(`largest num is ${largest}`)