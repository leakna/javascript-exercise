let isPrime=true;
for(let i=1;i<=100;i++){
  isPrime=true;
  for(let j=1;j<=i;j++){
    if((j!=i&&i%j==0)&&j!=1)
      isPrime=false
    if(i==1){
      isPrime=true
    }
  }
  if(isPrime)
    console.log(i)
}