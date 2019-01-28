
const LOGGER = require("./server-logger");
const ROUTER = require("./server-router");

const FS = require("fs");

const ERRORS =
{
	ROUTE_NOT_DEFINED: { code: 404, message: "Route not defined" },
	FILE_NOT_FOUND: { code: 404, message: "File not found" },
	UNDEFINED: { code: 404, message: "Undefined error" }
};

module.exports.handleRequest = function handleRequest(request, response)
{
	if (ROUTER.handleRequest(request, response) === false)
	{
		const method = request.method;
		const path = request.url;

		writeError(response, method, path, ERRORS.ROUTE_NOT_DEFINED);
	}
}

module.exports.getResource = function getResource(response, path, type = "text/plain")
{
	const filepath = "." + path;

	FS.readFile(filepath, null, function(error, data)
	{
		if (error)
		{
			writeError(response, null, path, ERRORS.FILE_NOT_FOUND);
		}
		else
		{
			writeData(response, data, type);
		}
	});
}

function writeError(response, method, path, type = ERRORS.UNDEFINED)
{
	const errorMessage = (type == null ? ERRORS.UNDEFINED.message : type.message);
	const errorCode = (type == null ? ERRORS.UNDEFINED.code : type.code);

	response.writeHead(errorCode);
	if (method != null && type === ERRORS.ROUTE_NOT_DEFINED)
	{
		response.write(method + " " + errorMessage + "!");
		LOGGER.error(method + " " + errorMessage + ": " + path);
	}
	else
	{
		response.write(errorMessage + "!");
		LOGGER.error(errorMessage + ": " + path);
	}
	response.end();
}

function writeData(response, data, type)
{
	response.writeHead(200, { "Content-Type": type });
	response.write(data);
	response.end();
}
