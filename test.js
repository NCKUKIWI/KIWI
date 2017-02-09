var x = "@#微積分".match(/^@[\u4e00-\u9fa5]{1,}/i);
if(x){
  x=x[0];
  x=x.replace(/@|\s/g,"");
}
else{
  console.log("no");
}
console.log(x);
