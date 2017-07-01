exports.checkLogin = function checkLogin(v){
  if(v === undefined){
    return function(req, res, next) {
      if(req.user) {
        next();
      } else {
        res.redirect("back");
      }
    }
  }else{
    return function(req, res, next) {
      if(!req.user) {
        next();
      } else {
        res.redirect("back");
      }
    }
  }
}

exports.apiAuth = function apiAuth(){
  return function(req, res, next) {
    if (req.user) {
      next();
    } else {
      res.send("No login");
    }
  }
}
