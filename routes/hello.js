
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('hello');
};

exports.tomato = function(req, res){
  res.render('tomato');
};

exports.tomatoiris = function(req, res){
  res.render('tomatoiris');
};
