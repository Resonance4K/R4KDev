
const APPLICATION = require("../server-application");
const MIME_TYPE = require("../mime-types");

module.exports.getRoutes = function getRoutes()
{
	const routes = [];

	routes.push(
	{
		method: "GET",
		path: "/",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/home.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/home",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/home.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/projects",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/projects.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/about",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/about.html", MIME_TYPE.HTML);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/contact",
		action: function(request, response)
		{
			APPLICATION.getResource(response, "/html/contact.html", MIME_TYPE.HTML);
		}
	});

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

	routes.push(
	{
		method: "GET",
		path: "/images/home/developer-tools.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/home/games.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/images/home/tutorials.png",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.PNG);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/fonts/material-design-icons/regular.eot",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.EOT);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/fonts/material-design-icons/regular.woff2",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.WOFF2);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/fonts/material-design-icons/regular.woff",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.WOFF);
		}
	});

	routes.push(
	{
		method: "GET",
		path: "/fonts/material-design-icons/regular.ttf",
		action: function(request, response)
		{
			APPLICATION.getResource(response, this.path, MIME_TYPE.TTF);
		}
	});

	routes.push(
	{
		method: "POST",
		path: "/contact",
		action: function(request, response)
		{
			let rawData = "";

			request.on("data", function(chunk)
			{
				rawData += chunk.toString();
			});

			request.on("end", function()
			{
				let data = rawData.split("&");

				// Clean up the format of the data by decoding URL encoded characters and performing string replacement operations
				data[0] = decodeURIComponent(data[0].replace("email=", ""));
				data[1] = decodeURIComponent(data[1].replace("subject=", "").replace(/\+/g, " "));
				data[2] = decodeURIComponent(data[2].replace("message=", "").replace(/\+/g, " "));

				// TODO: Implementation of sending contact form data to email address

				APPLICATION.getResource(response, "/html/contact-form-sent.html", MIME_TYPE.HTML);
			});
		}
	});

	return routes;
}
