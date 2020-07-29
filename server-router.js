
const LOGGER = require("./server-logger");

const FILES =
{
	MAIN: require("./routes/main"),
	PROJECT: require("./routes/project")
};

const ROUTES = [];

populateRoutes();
logRoutes();

function populateRoutes()
{
	ROUTES.push(FILES.MAIN.getRoutes());
	ROUTES.push(FILES.PROJECT.getRoutes());
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
