
const MIME_TYPE = require("../mime-types");

module.exports =
{
	process
};

function process(response, path, router)
{
	switch (path)
	{
		case "/js/main.js":
			router.display(response, path, MIME_TYPE.JS);
			break;
		default:
			return false;
	}
	
	return true;
}
