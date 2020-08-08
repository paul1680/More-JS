const num = [1,-2,3,-4,6,-98,9];
for (let i = 0; i<num.length; i++){
    if(num[i]>10){
        break;
    }
   // console.log(num[i]);
}
for (let i = 0; i<num.length; i++){
    if(num[i]<0){
        continue;
       // break;
    }
   console.log(num[i]);
}