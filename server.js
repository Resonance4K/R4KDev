
const HTTP = require("http");

const ROUTER = require("./server-router");

const SERVER = HTTP.createServer(function(request, response)
{
	ROUTER.handleRequest(request, response);
});

SERVER.listen(3000, "127.0.0.1", function()
{
	logRunningMessage();
	logProperties();
});

function logRunningMessage()
{
	console.log("Server is running...");
	console.log();
}

function logProperties()
{
	console.log("HOSTNAME: " + SERVER.address().address);
	console.log("PORT: " + SERVER.address().port);
	console.log("FAMILY: " + SERVER.address().family);
	console.log();
}
