
window.onload = function()
{
	updateElementJumpToTop();
}

window.onresize = function()
{
	updateElementJumpToTop();
}

function jumpToTop()
{
	document.documentElement.scrollTop = 0;
}

function updateElementJumpToTop()
{
	const element = document.getElementById("footer_jump_to_top");
	
	if (isWholePageVisible())
	{
		element.style.display = "none";
	}
	else
	{
		element.style.display = "block";
	}
}

function isWholePageVisible()
{
	const height = document.documentElement.clientHeight;
	const totalHeight = document.documentElement.offsetHeight;
	
	return (totalHeight <= height ? true : false);
}

function jumpToElement(elementID)
{
	document.getElementById(elementID).scrollIntoView(true);
}
