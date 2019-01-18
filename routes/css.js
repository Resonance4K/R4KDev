
const MIME_TYPE = require("../mime-types");

module.exports =
{
	process
};

function process(response, path, router)
{
	switch (path)
	{
		case "/css/main.css":
			router.display(response, path, MIME_TYPE.CSS);
			break;
		default:
			return false;
	}
	
	return true;
}
