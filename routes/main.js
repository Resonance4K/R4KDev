
const APPLICATION = require("../server-application");
const MIME_TYPE = require("../mime-types");

module.exports.getRoutes = function getRoutes()
{
	const routes = [];

	// ----------------------------------------------------------------------------------------------------
	// HTML
	// ----------------------------------------------------------------------------------------------------

	routes.push(
	{
		method: "GET",
		path: "/",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, "/html/home.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/projects",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, "/html/projects.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/about",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, "/html/about.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/contact",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, "/html/contact.html", MIME_TYPE.HTML);
		}
	});

	// ----------------------------------------------------------------------------------------------------
	// CSS
	// ----------------------------------------------------------------------------------------------------

	routes.push(
	{
		method: "GET",
		path: "/css/main.css",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.CSS);
		}
	});

	// ----------------------------------------------------------------------------------------------------
	// JS
	// ----------------------------------------------------------------------------------------------------

	routes.push(
	{
		method: "GET",
		path: "/js/main.js",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.JS);
		}
	});

	// ----------------------------------------------------------------------------------------------------
	// IMAGES
	// ----------------------------------------------------------------------------------------------------

	routes.push(
	{
		method: "GET",
		path: "/images/favicon.ico",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.ICO);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/icon.png",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/logo.png",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/home/developer-tools.png",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/home/games.png",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/home/tutorials.png",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	// ----------------------------------------------------------------------------------------------------
	// FONTS
	// ----------------------------------------------------------------------------------------------------

	routes.push(
	{
		method: "GET",
		path: "/fonts/material-design-icons/regular.eot",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.EOT);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/fonts/material-design-icons/regular.woff2",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.WOFF2);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/fonts/material-design-icons/regular.woff",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.WOFF);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/fonts/material-design-icons/regular.ttf",
		callback: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.TTF);
		}
	});

	return routes;
}
