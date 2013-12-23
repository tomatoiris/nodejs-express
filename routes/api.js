var vcard = [];

exports.create = function(reg,res) {
	var person = { 
		nickname: "",
		name: "",
		tel: ""
	};

 person.nickname = reg.params.name;

 person.tel = req.query.tel;
 person.name = req.query.name;

vcard.push(person);

	res.end();
};
                             
exports.read = function(req,res) {
	res.send(vcard);
	res.end();
};

exports.update = function(reg,res) {
	var nickname = reg.params.name;

	vcard.forEach(function (entry) {
		if (entry.nikname === nickname) {
			console.log('found!');

			entry.name = req.query.name;
			ent.tel = req.query.tel;
		}
	});

	res.end();
};

exports.delete = function(req,res) {
	res.end();
};