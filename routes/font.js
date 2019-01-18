
const MIME_TYPE = require("../mime-types");

module.exports =
{
	process
};

function process(response, path, router)
{
	switch (path)
	{
		case "/fonts/material-design-icons/regular.eot":
			router.display(response, path, MIME_TYPE.EOT);
			break;
		case "/fonts/material-design-icons/regular.woff2":
			router.display(response, path, MIME_TYPE.WOFF2);
			break;
		case "/fonts/material-design-icons/regular.woff":
			router.display(response, path, MIME_TYPE.WOFF);
			break;
		case "/fonts/material-design-icons/regular.ttf":
			router.display(response, path, MIME_TYPE.TTF);
			break;
		default:
			return false;
	}
	
	return true;
}
