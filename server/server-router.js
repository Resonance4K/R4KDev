
const LOGGER = require("./server-logger");

const FILES = getFiles();
module.exports.FILES = FILES;

const ROUTES = getRoutes();

function getFiles()
{
	const files =
	{
		MAINTENANCE: require("../routes/maintenance"),
		MAIN: require("../routes/main"),
		PROJECT: require("../routes/project")
	};

	return files;
}

function getRoutes()
{
	const routes = [];

	// Routes from the MAINTENANCE file should not be included in the array
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
	const method = request.method;
	const path = request.url;

	for (let i = 0; i < ROUTES.length; i++)
	{
		if (ROUTES[i] == null || ROUTES[i].length === 0) { continue; }

		for (let j = 0; j < ROUTES[i].length; j++)
		{
			if (ROUTES[i][j].method === method && ROUTES[i][j].path === path)
			{
				ROUTES[i][j].action(request, response);
				return true;
			}
		}
	}

	return false;
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

		routesExist = true;
		for (let j = 0; j < ROUTES[i].length; j++)
		{
			LOGGER.plain(ROUTES[i][j].method + ": " + ROUTES[i][j].path);
		}
	}

	if (routesExist === false)
	{
		LOGGER.plain("NO ROUTES DEFINED");
	}

	LOGGER.newline();
	LOGGER.divider(40);
	LOGGER.newline();
}

logRoutes();
