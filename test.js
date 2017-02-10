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

var x="微積分（二）    xx"
console.log(x.replace(/[（|）|\s]/g,""));
