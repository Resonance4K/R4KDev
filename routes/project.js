
const APPLICATION = require("../server-application");
const MIME_TYPE = require("../mime-types");

module.exports.getRoutes = function getRoutes()
{
	const routes = [];

	routes.push(
	{
		method: "GET",
		path: "/projects/dev/SFR",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/projects/dev/sfr.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/projects/dev/sfr-1.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	return routes;
}
