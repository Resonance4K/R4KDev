
const APPLICATION = require("../server/server-application");
const MIME_TYPE = require("../server/mime-types");

module.exports.getRoutes = function getRoutes()
{
	const routes = [];

	routes.push(
	{
		method: "GET",
		path: "/projects/devtools/SFR",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/projects/devtools/sfr.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/projects/devtools/sfr-1.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/projects/devtools/DynaKey",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/projects/devtools/dynakey.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/projects/devtools/dynakey-1.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	return routes;
}
