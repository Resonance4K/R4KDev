
const MIME_TYPE = require("../mime-types");

module.exports =
{
	process
};

function process(response, path, router)
{
	switch (path)
	{
		case "/":
			router.display(response, "/html/home.html", MIME_TYPE.HTML);
			break;
		case "/projects":
			router.display(response, "/html/projects.html", MIME_TYPE.HTML);
			break;
		case "/about":
			router.display(response, "/html/about.html", MIME_TYPE.HTML);
			break;
		case "/contact":
			router.display(response, "/html/contact.html", MIME_TYPE.HTML);
			break;
		default:
			return false;
	}
	
	return true;
}
