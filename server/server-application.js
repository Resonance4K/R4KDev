
const LOGGER = require("./server-logger");
const ROUTER = require("./server-router");
const WEBSITE_CONFIG = require("../config/website");
const MIME_TYPE = require("../server/mime-types");

const FS = require("fs");

const ERRORS =
{
	ROUTE_NOT_DEFINED: { code: 404, message: "Route is not defined" },
	FILE_NOT_FOUND:    { code: 404, message: "File could not be found" },
	FILE_NOT_READ:     { code: 500, message: "File could not be read" },
	UNDEFINED:         { code: 500, message: "Undefined error" }
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

module.exports.getResource = function getResource(response, path, type = MIME_TYPE.TXT)
{
	const filepath = getFilepath(path, type);

	FS.readFile(filepath, null, function(error, data)
	{
		if (error)
		{
			// Error code "ENOENT" is returned if the resource specified by the filepath could not be found
			if (error.code === "ENOENT")
			{
				writeError(response, null, filepath, ERRORS.FILE_NOT_FOUND);
			}
			else
			{
				writeError(response, null, filepath, ERRORS.FILE_NOT_READ);
			}
		}
		else
		{
			writeData(response, data, type);
		}
	});
}

function getFilepath(path, type)
{
	if (WEBSITE_CONFIG.isUnderMaintenance === true && type === MIME_TYPE.HTML)
	{
		path = ROUTER.FILES.MAINTENANCE.getRoutes().maintenanceNotice;
	}

	return "." + path;
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
