$(document).ready(function(){
  //Parse URL function
  function urlObject(options) {
      var url_search_arr,
          option_key,
          i,
          urlObj,
          get_param,
          key,
          val,
          url_query,
          url_get_params = {},
          a = document.createElement('a'),
          default_options = {
              'url': window.location.href,
              'unescape': true,
              'convert_num': true
          };
      if (typeof options !== "object") {
          options = default_options;
      } else {
          for (option_key in default_options) {
              if (default_options.hasOwnProperty(option_key)) {
                  if (options[option_key] === undefined) {
                      options[option_key] = default_options[option_key];
                  }
              }
          }
      }
      a.href = options.url;
      url_query = a.search.substring(1);
      url_search_arr = url_query.split('&');
      if (url_search_arr[0].length > 1) {
          for (i = 0; i < url_search_arr.length; i += 1) {
              get_param = url_search_arr[i].split("=");

              if (options.unescape) {
                  key = decodeURI(get_param[0]);
                  val = decodeURI(get_param[1]);
              } else {
                  key = get_param[0];
                  val = get_param[1];
              }
              if (options.convert_num) {
                  if (val.match(/^\d+$/)) {
                      val = parseInt(val, 10);
                  } else if (val.match(/^\d+\.\d+$/)) {
                      val = parseFloat(val);
                  }
              }
              if (url_get_params[key] === undefined) {
                  url_get_params[key] = val;
              } else if (typeof url_get_params[key] === "string") {
                  url_get_params[key] = [url_get_params[key], val];
              } else {
                  url_get_params[key].push(val);
              }
              get_param = [];
          }
      }
      urlObj = {
          protocol: a.protocol,
          hostname: a.hostname,
          host: a.host,
          port: a.port,
          hash: a.hash.substr(1),
          pathname: a.pathname,
          search: a.search,
          parameters: url_get_params
      };
      return urlObj;
  }

  //Parse URL
  var url = window.location.href;
  var urlObj = urlObject({'url':url});

  //Ajax Order
  $('.orderbtn').on('click',function(){
    var order = this.getAttribute("data-name");
    if(urlObj.parameters.course_name || urlObj.parameters.catalog || urlObj.parameters.queryw || urlObj.parameters.teacher || urlObj.parameters.order){
      if(urlObj.parameters.order){
        var searchword="?";
        for(var i in urlObj.parameters){
          if(i!="order"){
            searchword= searchword+i+"="+urlObj.parameters[i]+"&";
          }
        }
        var ajaxurl = "/" + searchword + "order=" + order;
      }
      else{
        var searchword="?";
        for(var i in urlObj.parameters){
          if(i!="order"){
            searchword= searchword+i+"="+urlObj.parameters[i]+"&";
          }
        }
        var ajaxurl = "/" + searchword + "&order=" + order;
      }
    }
    else{
      var ajaxurl = "/" + "?order=" + order;
    }
    $.ajax({
      url: ajaxurl,
      type: 'GET',
      success: function(response) {
        $('.post-row').fadeOut().remove();
        for(var i in response){
          var dom ="<tr id='post-"+response[i].id+"' class='post-row' data-toggle='modal' data-target='#post-modal' data-id='"+response[i].id+"'><td class='course_name'>"+response[i].course_name+"</td><td class='catalog'>"+response[i].catalog+"</td><td class='teacher'>"+response[i].teacher+"</td><td class='semester'>"+response[i].semester+"</td></tr>";
          $('#post-table').append(dom);
        }
        $('.sort.descending.icon').remove();
        var icon = "<i class='sort descending icon'></i>";
        $("th.orderbtn."+order).append(icon);
        /* 將新的dom 綁定ajaxshow function */
        $('.post-row').on('click',function(){
          var postid= $(this).data("id");
          ajaxshow(postid);
        });
      }
    });
  });

  /* 上方通知欄關閉  */
  $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
  });


  /* Ajax show */
  function ajaxshow(id){
    var ajaxurl = '/post/'+ id;
    $.ajax({
      url:ajaxurl,
      type: 'GET',
      success: function(response) {
        $('#post-modal .modal-content').prepend(response);
        $('#post-modal').data('bs.modal').handleUpdate();
      }
    });
  }

  /* 綁定ajaxshow function */
  $('.post-row').on('click',function(){
    var postid= this.getAttribute("data-id");
    ajaxshow(postid);
  });


  /* modal 關閉時清空 modal 內容 */
  $('#post-modal').on('hidden.bs.modal', function () {
    $('#post-modal .modal-content').empty();
  });

});
