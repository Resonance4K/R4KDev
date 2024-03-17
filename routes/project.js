
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

	routes.push(
	{
		method: "GET",
		path: "/projects/software/CinnamonThemes",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/projects/software/cinnamon-themes.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/projects/software/cinnamon-themes-1.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/projects/gaming/simple2d/S2DEngine",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/projects/gaming/simple2d/s2dengine.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/projects/gaming/simple2d/s2dengine-1.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/projects/gaming/simple2d/S2DTileMap",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/projects/gaming/simple2d/s2dtilemap.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/projects/gaming/simple2d/s2dtilemap-1.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/projects/gaming/simple2d/S2DToolkit",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/projects/gaming/simple2d/s2dtoolkit.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/projects/gaming/simple2d/s2dtoolkit-1.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/projects/gaming/quake3/OpposingForce",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/projects/gaming/quake3/opposing-force.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/projects/gaming/quake3/opposing-force-1.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/projects/gaming/quake3/eNautica",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/projects/gaming/quake3/enautica.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/projects/gaming/quake3/enautica-1.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	return routes;
}
