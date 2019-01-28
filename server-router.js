
const LOGGER = require("./server-logger");

const FILES =
{
	MAIN: require("./routes/main"),
	PROJECT: require("./routes/project")
};

const ROUTES = [];

populateRoutes();

function populateRoutes()
{
	ROUTES.push(FILES.MAIN.getRoutes());
	ROUTES.push(FILES.PROJECT.getRoutes());

	logRoutes();
}

module.exports.handleRequest = function handleRequest(request, response)
{
	return processRequest(request, response);
}

function processRequest(request, response)
{
	const method = request.method;
	const path = request.url;

	for (var i = 0; i < ROUTES.length; i++)
	{
		if (ROUTES[i] == null || ROUTES[i].length === 0) { continue; }

		for (var j = 0; j < ROUTES[i].length; j++)
		{
			if (ROUTES[i][j].method === method && ROUTES[i][j].path === path)
			{
				ROUTES[i][j].callback(request, response);
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

	var routesExist = false;
	for (var i = 0; i < ROUTES.length; i++)
	{
		if (ROUTES[i] == null || ROUTES[i].length === 0) { continue; }

		routesExist = true;
		for (var j = 0; j < ROUTES[i].length; j++)
		{
			LOGGER.info(ROUTES[i][j].method + ": " + ROUTES[i][j].path);
		}
	}

	LOGGER.newline();
	LOGGER.divider(40);

	if (routesExist === true)
	{
		LOGGER.newline(2);
	}
}
