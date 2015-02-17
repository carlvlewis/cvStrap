var fs = require("fs");
var Handlebars = require("handlebars");

function render(resume) {
var css = fs.readFileSync(__dirname + "/css/bootstrap.min.css", "utf-8") + fs.readFileSync(__dirname + "/css/shared.css", "utf-8") + fs.readFileSync(__dirname + "/css/screen.css", "utf-8") + fs.readFileSync(__dirname + "/css/print.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
	return Handlebars.compile(template)({
		css: css,
		resume: resume
	});
}

module.exports = {
	render: render
};
