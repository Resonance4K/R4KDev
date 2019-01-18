
const MIME_TYPE = require("../mime-types");

module.exports =
{
	process
};

function process(response, path, router)
{
	switch (path)
	{
		case "/images/favicon.ico":
			router.display(response, path, MIME_TYPE.ICO);
			break;
		case "/images/icon.png":
			router.display(response, path, MIME_TYPE.PNG);
			break;
		case "/images/logo.png":
			router.display(response, path, MIME_TYPE.PNG);
			break;
		case "/images/home/developer-tools.png":
			router.display(response, path, MIME_TYPE.PNG);
			break;
		case "/images/home/games.png":
			router.display(response, path, MIME_TYPE.PNG);
			break;
		case "/images/home/tutorials.png":
			router.display(response, path, MIME_TYPE.PNG);
			break;
		default:
			return false;
	}
	
	return true;
}
