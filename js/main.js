
window.addEventListener("load", function()
{
	generateCopyrightYear();

	toggleVisibiltyProjectItemGroups();

	updateElementsFooter();
});

window.addEventListener("resize", function()
{
	updateElementsFooter();
});

// -------------------------------------------------------------------------------

function generateCopyrightYear()
{
	const copyrightElement = document.getElementById("copyright_year");

	if (copyrightElement != null)
	{
		const releaseYear = 2024;
		const currentYear = new Date().getFullYear();

		copyrightElement.textContent = (releaseYear === currentYear ? releaseYear : releaseYear + " - " + currentYear);
	}
}

function updateElementsFooter()
{
	updateElementProjectFooterHorizontalRule();
	updateElementJumpToTop();
}

function updateElementProjectFooterHorizontalRule()
{
	toggleVisibilityBasedOnPageSize("footer_project_hr");
}

function updateElementJumpToTop()
{
	toggleVisibilityBasedOnPageSize("footer_jump_to_top");
}

function toggleVisibilityBasedOnPageSize(elementId)
{
	const element = document.getElementById(elementId);

	if (element != null)
	{
		if (isWholePageVisible())
		{
			element.style.display = "none";
		}
		else
		{
			element.style.display = "block";
		}
	}
}

function isWholePageVisible()
{
	const height = document.documentElement.clientHeight;
	const totalHeight = document.documentElement.offsetHeight;
	
	return (totalHeight <= height);
}

function jumpToTop()
{
	document.documentElement.scrollTop = 0;
}

// Example of a font icon is the Material Design Icons HTML representation
function convertFontIconIntoCodePointString(fontIcon)
{
	// Convert the hexadecimal code point at value of base 16 representation into a plain text string
	return fontIcon.trim().codePointAt(0).toString(16);
}

// Example of a entity number is &#xe88a; (home icon from Material Design Icon set)
function convertEntityNumberIntoCodePointString(entityNumber)
{
	return entityNumber.replaceAll("&#x", "").replaceAll("&#", "").replaceAll(";", "");
}

function toggleVisibiltyProjectItemGroups()
{
	toggleVisibilityProjectItemGroup("gaming_s2dengine_group_items");
	toggleVisibilityProjectItemGroup("gaming_quake3arena_group_items");
}

function toggleVisibilityProjectItemGroup(groupElementId)
{
	const groupElement = document.getElementById(groupElementId);

	if (groupElement != null)
	{
		const groupElementItems = Array.from(groupElement.getElementsByClassName("item"));

		let visible = true;

		const groupItem = groupElementItems[0].getElementsByClassName("extra_info_group")[0];
		if (convertFontIconIntoCodePointString(groupItem.textContent) === convertEntityNumberIntoCodePointString("&#xe5cf;"))
		{
			visible = false;
		}

		for (let i = 1; i < groupElementItems.length; i++)
		{
			groupElementItems[i].style.display = (visible ? "block" : "none");

			// Add minor margin on the bottom of the last item in the grouping to more clearly separate from other groups or standalone items
			if (i === groupElementItems.length - 1 && visible)
			{
				groupElementItems[i].style.marginBottom = "10px";
			}
		}
	}
}

function toggleExpandProjectItemGroup(element)
{
	if (element != null)
	{
		const itemGroupIconElement = element.getElementsByClassName("extra_info_group")[0];

		// Expand More icon code = &#xe5cf;
		// Expand Less icon code = &#xe5ce;
		if (convertFontIconIntoCodePointString(itemGroupIconElement.textContent) === convertEntityNumberIntoCodePointString("&#xe5cf;"))
		{
			itemGroupIconElement.innerHTML = "&#xe5ce;";
		}
		else
		{
			itemGroupIconElement.innerHTML = "&#xe5cf;";
		}

		toggleVisibilityProjectItemGroup(element.id + "_items");
		updateElementsFooter();
	}
}

function processContactForm()
{
	const form = document.getElementById("contact_form");

	const email = form.elements.namedItem("email");
	const subject = form.elements.namedItem("subject");
	const message = form.elements.namedItem("message");

	let isEmailValid = validateContactFormEmail(email);
	let isSubjectValid = validateContactFormSubject(subject);
	let isMessageValid = validateContactFormMessage(message);

	if (isEmailValid && isSubjectValid && isMessageValid)
	{
		form.submit();
	}
}

function validateContactFormEmail(email)
{
	const emailValue = email.value;
	const emailErrorElement = document.getElementById("contact_form_email_error");

	const lastAtSignIndex = emailValue.lastIndexOf("@");
	const lastDotIndex = emailValue.lastIndexOf(".");

	if (emailValue.indexOf(' ') >= 0)
	{
		emailErrorElement.textContent = "ERROR: Email should not contain any spaces!";
		return false;
	}
	else if (emailValue.trim() === "")
	{
		emailErrorElement.textContent = "ERROR: Email is empty!";
		return false;
	}
	else if (emailValue.length > 40)
	{
		emailErrorElement.textContent = "ERROR: Email is too long! Max of 40 characters allowed";
		return false;
	}
	else if (lastAtSignIndex === -1 || lastDotIndex === -1 || lastDotIndex < lastAtSignIndex || lastAtSignIndex === 0 || lastDotIndex === lastAtSignIndex + 1)
	{
		emailErrorElement.textContent = "ERROR: Email is invalid!";
		return false;
	}
	else
	{
		emailErrorElement.textContent = "";
		return true;
	}
}

function validateContactFormSubject(subject)
{
	const subjectValue = subject.value;
	const subjectErrorElement = document.getElementById("contact_form_subject_error");

	if (subjectValue.trim() === "")
	{
		subjectErrorElement.textContent = "ERROR: Subject is empty!";
		return false;
	}
	else if (subjectValue.length > 128)
	{
		subjectErrorElement.textContent = "ERROR: Subject is too long! Max of 128 characters allowed";
		return false;
	}
	else
	{
		subjectErrorElement.textContent = "";
		return true;
	}
}

function validateContactFormMessage(message)
{
	const messageValue = message.value;
	const messageErrorElement = document.getElementById("contact_form_message_error");

	if (messageValue.trim() === "")
	{
		messageErrorElement.textContent = "ERROR: Message is empty!";
		return false;
	}
	else if (messageValue.length > 8192)
	{
		messageErrorElement.textContent = "ERROR: Message is too long! Max of 8192 characters allowed";
		return false;
	}
	else
	{
		messageErrorElement.textContent = "";
		return true;
	}
}
