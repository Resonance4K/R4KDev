
const APPLICATION = require("../server/server-application");
const MIME_TYPE = require("../server/mime-types");

module.exports.getRoutes = function getRoutes()
{
	const routes = [];

	routes.push(
	{
		method: "GET",
		path: "/maintenance",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/maintenance.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/js/maintenance.js",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.JS);
		}
	});

	return routes;
}

module.exports.getMaintenancePageRoute = function getMaintenancePageRoute()
{
	// Maintenance page should always be the first item in the array of maintenance routes
	return this.getRoutes()[0];
}
