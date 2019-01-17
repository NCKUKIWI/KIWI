$(document).ready(function(){
    $.ajax({                //get the courses information  
       url:'https://nckuhub.com/api/course', 
        method:"GET ",
     	  success:function(result){
          data=result
          console.log(data);
	      },
    });
      // function OnInput (event){
      //  $('#test').html('');
      //  var input,i,j
      //   j=0;
      //  input=event.target.value
      //  var get=new RegExp(input)
      //    var array = new Array(); //for courses name
      //  for(i=0;i<5112;i++)
      //   {
      //      if((get.test(data[i]["課程名稱 "])||get.test(data[i]["老師 "]))&&(input!=''))  //get the courses matched 
      //    {
      //      array[j]=data[i];
      //       j++; 
      //     }
      //     }
      //   console.log(array);
      //   for(i=0;i<array.length;i++)
      //  {
      //    //$('#test').append("<li class='collection-item'><span class='secondary-content' style='padding-right:320px'>"+array[i]["課程名稱"]+"</span></li>") } }
      // }
});