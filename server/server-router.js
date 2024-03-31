
const LOGGER = require("./server-logger");
const WEBSITE_CONFIG = require("../config/website");

const FILES = getFiles();
const KEYS_OF_FILES = Object.keys(FILES);
module.exports.FILES = FILES;

const ROUTES = getRoutes();

function getFiles()
{
	const files =
	{
		BASE: require("../routes/base"),
		MAINTENANCE: require("../routes/maintenance"),
		MAIN: require("../routes/main"),
		PROJECT: require("../routes/project")
	};

	return files;
}

function getRoutes()
{
	const routes = [];

	routes.push(FILES.BASE.getRoutes());
	routes.push(FILES.MAINTENANCE.getRoutes());
	routes.push(FILES.MAIN.getRoutes());
	routes.push(FILES.PROJECT.getRoutes());

	return routes;
}

module.exports.handleRequest = function handleRequest(request, response)
{
	return processRequest(request, response);
}

function processRequest(request, response)
{
	let processedStatus = processBaseRoutes(request, response);

	if (!processedStatus && WEBSITE_CONFIG.isUnderMaintenance)
	{
		processedStatus = processMaintenanceRoutes(request, response);
	}
	else if (!processedStatus && !WEBSITE_CONFIG.isUnderMaintenance)
	{
		processedStatus = processStandardRoutes(request, response);
	}

	return processedStatus;
}

function processBaseRoutes(request, response)
{
	const routeGroupIndex = getRouteGroupIndex("BASE");

	for (let i = 0; i < ROUTES[routeGroupIndex].length; i++)
	{
		if (ROUTES[routeGroupIndex][i].method === request.method && ROUTES[routeGroupIndex][i].path === request.url)
		{
			ROUTES[routeGroupIndex][i].action(request, response);
			return true;
		}
	}

	return false;
}

function processMaintenanceRoutes(request, response)
{
	const routeGroupIndex = getRouteGroupIndex("MAINTENANCE");

	for (let i = 0; i < ROUTES[routeGroupIndex].length; i++)
	{
		// Process page routes (these are not file resources and hence do not have file extensions)
		if (request.url.indexOf(".") === -1)
		{
			FILES.MAINTENANCE.getMaintenancePageRoute().action(request, response);
			return true;
		}
		
		// Process file resource routes
		if (ROUTES[routeGroupIndex][i].method === request.method && ROUTES[routeGroupIndex][i].path === request.url)
		{
			ROUTES[routeGroupIndex][i].action(request, response);
			return true;
		}
	}

	return false;
}

function processStandardRoutes(request, response)
{
	const routeGroupIndex = getRouteGroupIndex(request.url);

	for (let i = 0; i < ROUTES[routeGroupIndex].length; i++)
	{
		if (ROUTES[routeGroupIndex][i].method === request.method && ROUTES[routeGroupIndex][i].path === request.url)
		{
			ROUTES[routeGroupIndex][i].action(request, response);
			return true;
		}
	}

	return false;
}

function getRouteGroupIndex(path)
{
	// The base set of routes applicable for all pages
	if (path === "BASE")
	{
		return KEYS_OF_FILES.indexOf("BASE");
	}
	// The set of routes specific to the activity of maintenance
	if (path === "MAINTENANCE")
	{
		return KEYS_OF_FILES.indexOf("MAINTENANCE");
	}

	// The standard sets of route groupings
	if (path.startsWith("/projects/") || path.startsWith("/images/projects/") || path.startsWith("/js/projects/"))
	{
		return KEYS_OF_FILES.indexOf("PROJECT");
	}
	else
	{
		return KEYS_OF_FILES.indexOf("MAIN");
	}
}

function logRoutes()
{
	LOGGER.plain("ROUTES:");
	LOGGER.divider(40);
	LOGGER.newline();

	let routesExist = false;
	for (let i = 0; i < ROUTES.length; i++)
	{
		if (ROUTES[i] == null || ROUTES[i].length === 0) { continue; }

		LOGGER.plain("-- " + KEYS_OF_FILES[i] + " --");

		routesExist = true;
		for (let j = 0; j < ROUTES[i].length; j++)
		{
			LOGGER.plain(ROUTES[i][j].method + ": " + ROUTES[i][j].path);
		}

		LOGGER.newline();
	}

	if (routesExist === false)
	{
		LOGGER.plain("NO ROUTES DEFINED");
		LOGGER.newline();
	}

	LOGGER.divider(40);
	LOGGER.newline();
}

logRoutes();
