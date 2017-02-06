$(document).ready(function(){
  /* toastr option */
  toastr.options = {
    "closeButton": true,
    "positionClass": "toast-top-right",
    "showDuration": "0",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000"
  }

});

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

  /* coursetime parser */
  function coursetimeparser(coursetime){
    var re = /\[([1-5])\]([1-9A-DN])~([0-9A-DN])|\[([1-5])\]([1-9A-DN])/g;
    var timearr = [];
    var m;
    /* parse couse time */
    while ((m = re.exec(coursetime)) !== null) {
      if (m.index === re.lastIndex) {
          re.lastIndex++;
      }
      if(m[3]==undefined){
        switch (m[5]) {
          case "N":
            m[5]=5;
            break;
          case "A":
            m[5]=11;
            break;
          case "B":
            m[5]=12;
            break;
          case "C":
            m[5]=13;
            break;
          default:
            (parseInt(m[5])>4) ? m[5]=parseInt(m[5])+1 : m[5]=parseInt(m[5]);
            break;
        }
        timearr.push({day:parseInt(m[4]),hour:m[5]});
      }
      else{
        switch (m[2]) {
          case "N":
            m[2]=5;
            break;
          case "A":
            m[2]=11;
            break;
          case "B":
            m[2]=12;
            break;
          case "C":
            m[2]=13;
            break;
          default:
            (parseInt(m[2])>4) ? m[2]=parseInt(m[2])+1 : m[2]=parseInt(m[2]);
            break;
        }
        switch (m[3]) {
          case "N":
            m[3]=5;
            break;
          case "A":
            m[3]=11;
            break;
          case "B":
            m[3]=12;
            break;
          case "C":
            m[3]=13;
            break;
          default:
            (parseInt(m[3])>4) ? m[3]=parseInt(m[3])+1 : m[3]=parseInt(m[3]);
            break;
        }
        for(var i = m[2]; i <= m[3] ; i++){
          timearr.push({day:parseInt(m[1]),hour:i});
        }
      }
    }
    return timearr;
    /*
      timearr will be an array of object,each of the object have two keys, day and hour
      Example:
      [2]3~4 => [{day:2,hour:3},{day:2,hour:4}]
    */
  }
