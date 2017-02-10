var text = "@h3111";
var keyword = text.match(/^@[\u4e00-\u9fa5]{1,}/i);
if(keyword){
  keyword=keyword[0].replace(/@|\s/g,"");
  console.log("@");
  console.log(keyword);
}
var keyword2 = text.match(/^@[a-zA-Z0-9]{1,}/i);
if(keyword2){
  keyword2=keyword2[0].replace(/@|\s/g,"");
  console.log("#");
  console.log(keyword2);
}

var x="@微積分 $氣管"
var keyword = x.match(/^@[\u4e00-\u9fa5]{1,}/i);
var dpt = x.match(/\$[\u4e00-\u9fa5]{1,}/i);
console.log(dpt);
if(keyword){
  keyword=keyword[0].replace(/@|\s/g,"");
  if(dpt){
    dpt=dpt[0].replace(/\$|\s/g,"");
  }
  console.log(keyword);
  console.log(dpt);
}
