let isPrime=true;
for(let i=1;i<=100;i++){
  isPrime=true;
  for(let j=2;j<=i;j++){
    if(j!=i&&i%j==0)
      isPrime=false
  }
  if(isPrime&&i!=1)
    console.log(i)
}