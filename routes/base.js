
const APPLICATION = require("../server/server-application");
const MIME_TYPE = require("../server/mime-types");

module.exports.getRoutes = function getRoutes()
{
	const routes = [];

	routes.push(
	{
		method: "GET",
		path: "/css/main.css",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.CSS);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/js/main.js",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.JS);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/favicon.ico",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.ICO);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/icon.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/logo.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	return routes;
}
