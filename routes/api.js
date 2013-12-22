

var calledTime = 0;
exports.time = function(reg,res){
	calledTime += 1;
	var obj = {
		"server":"Tomato's Server",
		"time":new Date().toISOString(),
		"count":calledTime

	};

	res.send(obj);
};