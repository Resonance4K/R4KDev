
module.exports.plain = function plain(message)
{
	log(message, null);
}

module.exports.info = function info(message)
{
	log(message, "INFO");
}

module.exports.warning = function warning(message)
{
	log(message, "WARNING");
}

module.exports.error = function error(message)
{
	log(message, "ERROR");
}

function log(message, type)
{
	if (message == null || typeof message !== "string") { return; }

	const output = (type == null ? message : "[" + type + "] " + message);
	console.log(output);
}

module.exports.newline = function newline(number = 1)
{
	for (let i = 0; i < number; i++)
	{
		console.log();
	}
}

module.exports.divider = function divider(length = 1, char = "-")
{
	let output = "";
	for (let i = 0; i < length; i++)
	{
		output += char;
	}
	
	console.log(output);
}
