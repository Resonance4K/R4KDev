
const LOGGER = require("./server-logger");
const APPLICATION = require("./server-application");

const HTTP = require("http");

const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const SERVER = HTTP.createServer();
SERVER.on("request", requestListener);
SERVER.listen(PORT, HOSTNAME, serverListener);

// Triggered when a request is sent to the server
function requestListener(request, response)
{
	APPLICATION.handleRequest(request, response);
}

// Triggered when the server begins listening on the specified hostname and port
function serverListener()
{
	logRunningMessage();
	logProperties();
	logListeningMessage();
}

function logRunningMessage()
{
	LOGGER.info("Server is running...");
	LOGGER.newline();
}

function logProperties()
{
	LOGGER.info("HOSTNAME: " + SERVER.address().address);
	LOGGER.info("PORT: " + SERVER.address().port);
	LOGGER.info("FAMILY: " + SERVER.address().family);
	LOGGER.newline();
}

function logListeningMessage()
{
	LOGGER.info("Server is listening for requests...");
	LOGGER.newline(2);
}
