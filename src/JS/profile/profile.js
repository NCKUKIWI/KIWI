var name=""
var mail=""
var department=""
var grade=""
var data;
var test;
$(document).ready(function() {
   // $('#content').hide();
    $('#small_card').hide();
    $('#pic').click(function()
  {
     $('#small_card').show();
    })
  $('#go').click(function()
  {
     $('#content').show();
    })
    var list=
    [
      {
      "type": "106-1",
      "semester":"106下",
      "name": "微積分(一) ",
      "teacher": "工資系 H3005-侯世章"
      },
      {
       "type": "106-1",
       "semester":"106下",
       "name": "微積分(一) ",
      "teacher": "工資系 H3005-侯世章"
      },
      {
       "type": "106-1",
       "semester":"106下",
       "name": "微積分(一) ",
       "teacher": "工資系 H3005-侯世章"

       },
        {
       "type": "106-1",
       "semester":"106下",
       "name": "微積分(一) ",
        "teacher": "工資系 H3005-侯世章"

       },
      {
       "type": "106-1",
       "semester":"106下",
       "name": "微積分(一) ",
        "teacher": "工資系 H3005-侯世章"
       }
      ]
      var list2=
    [
      {
      "type": "工",
      "semester":"106下",
      "name": "微積分(一)1 ",
      "teacher": "侯世章32e "
      },
      {
       "type": "工",
       "semester":"106下",
       "name": "微積分(一)1 ",
       "teacher": "侯世章323f "
      },
      {
       "type": "工",
       "semester":"106下",
       "name": "微積分(一)1 ",
       "teacher": "侯世章4ef "
       },
        {
       "type": "工",
       "semester":"106下",
       "name": "微積分(一)1 ",
       "teacher": "侯世章5efw "},
        {
       "type": "工",
       "semester":"106下",
       "name": "微積分(一)1 ",
       "teacher": "侯世章6 "},
     ]
   var comment=new Vue({
    el:'#frame1',
    data:{
        items:list
     },
     methods:{
    deleteitem:function(index){   
    list.splice(index,1);
   }
 
    }
  })
  var comment1=new Vue({
  el:'#frame2',
  data:{
    items:list2
  },
   methods:{
    deleteitem:function(index){
   list2.splice(index,1)
   }
  }
 })
   $('#submit').click(function()  //change the profile
{
   name=$('#first_name1').val();
   mail=$('#first_name2').val();
   department=depatment.message;
   grade=grade.message;
   console.log(department+grade)
   $('#name').text(name);
   $('#mail').text(mail);    
   $('#depart').text(department); 
   $('#gra').text(grade); 
   $('#box').hide();
   $('#mask').hide(); 
})
$('#link').click(function()
{ 
      $('#mask').show();
      $('#box').show();
})
 $('#back').click(function()
{
   $('#box').hide();
   $('#mask').hide();
  })
})
$(document).mouseup(function(e){   //edit the profile
  var _con = $('#box');   
  if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
   $('#box').hide();
   $('#mask').hide();
  }
});   











