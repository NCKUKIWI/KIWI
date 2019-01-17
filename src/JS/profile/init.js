(function($){
  $(function(){
    $('select').formSelect();
    $('.modal').modal({
      dismissible: false,
      preventScrolling: false
    });
    $(".dropdown-trigger").dropdown({
      /*closeOnClick: false,
      hover: false*/
    });
    $('input.autocomplete').autocomplete({
     data: {
       "王維聰": null,
       "謝佩璇": null,
       "林清河": null
     },
   });

  }); // end of document ready
})(jQuery); // end of jQuery name space
