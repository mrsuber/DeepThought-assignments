let a=0;
let array=[]
for(let i=0;i<100;i++){
  if(i+2>100){
    break;
  }
  if(i%2===0){
    array.push(i)
  }
}
let value=51;
// console.log(array)
const binary = (value,array)=>{
  let lower =0
  let upper= array.length-1;
  while(lower<=upper){
    const middle=lower+Math.floor((upper-lower)/2)
    if(value===array[middle]){
      console.log("element found",array[middle]) ;
      return
    }
    if(value<array[middle]){
      upper=middle-1;
    }else{
      lower=middle+1;
    }
  }
  console.log("element not found")
  return -1
}

binary(value,array)
