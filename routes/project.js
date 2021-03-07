
const APPLICATION = require("../server/server-application");
const MIME_TYPE = require("../server/mime-types");

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

	routes.push(
	{
		method: "GET",
		path: "/projects/dev/DynaKey",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/projects/dev/dynakey.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/projects/dev/dynakey-1.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	return routes;
}
