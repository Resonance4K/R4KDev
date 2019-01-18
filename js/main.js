
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
	var element = document.getElementById("footer_jump_to_top");
	
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
	var height = document.documentElement.clientHeight;
	var totalHeight = document.documentElement.offsetHeight;
	
	return (totalHeight <= height ? true : false);
}
