
const FS = require("fs");

const ROUTES =
{
	CSS: require("./routes/css"),
	FONT: require("./routes/font"),
	HTML: require("./routes/html"),
	IMAGE: require("./routes/image"),
	JS: require("./routes/js")
};

const ERRORS =
{
	ROUTE_NOT_DEFINED: 1,
	FILE_NOT_FOUND: 2
};

module.exports =
{
	handleRequest,
	display
};

function handleRequest(request, response)
{
	const path = request.url;
	
	if (ROUTES.HTML.process(response, path, this)) { return; }
	if (ROUTES.CSS.process(response, path, this)) { return; }
	if (ROUTES.JS.process(response, path, this)) { return; }
	if (ROUTES.IMAGE.process(response, path, this)) { return; }
	if (ROUTES.FONT.process(response, path, this)) { return; }
	
	displayError(response, 404, path, ERRORS.ROUTE_NOT_DEFINED);
}

function display(response, path, type)
{
	filepath = "." + path;

	FS.readFile(filepath, null, function(error, data)
	{
		if (error)
		{
			displayError(response, 404, path, ERRORS.FILE_NOT_FOUND);
		}
		else
		{
			displayData(response, data, type);
		}
	});
}

function displayError(response, statusCode, path, type = null)
{
	var message = null;

	switch (type)
	{
		case ERRORS.ROUTE_NOT_DEFINED:
			message = "Route not defined";
			break;
		case ERRORS.FILE_NOT_FOUND:
			message = "File not found";
			break;
		default:
			message = "Undefined error";
			break;
	}

	response.writeHead(statusCode);
	response.write("[ERROR] " + message + "!");
	console.log("[ERROR] " + message + ": " + path);
	response.end();
}

function displayData(response, data, type)
{
	response.writeHead(200, { "Content-Type": type });
	response.write(data);
	response.end();
}
