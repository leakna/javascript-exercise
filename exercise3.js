let numgrade=51
let lettergrade=''
if(numgrade>=90)
  lettergrade='A'
else if(numgrade>=80)
  lettergrade='B'
else if(numgrade>=75)
  lettergrade='C'
else if(numgrade>=65)
  lettergrade='D'
else if(numgrade>=50)
  lettergrade='E'
else
  lettergrade='F'
console.log(lettergrade)