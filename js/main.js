
window.onload = function()
{
	generateCopyrightYear();
	updateElementJumpToTop();
}

window.onresize = function()
{
	updateElementJumpToTop();
}

function generateCopyrightYear()
{
	const releaseYear = 2020;
	const currentYear = new Date().getFullYear();

	document.getElementById("copyright_year").textContent = (releaseYear === currentYear ? releaseYear : releaseYear + " - " + currentYear);
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
	else if (emailValue.length > 128)
	{
		emailErrorElement.textContent = "ERROR: Email is too long!";
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
		subjectErrorElement.textContent = "ERROR: Subject is too long!";
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
		messageErrorElement.textContent = "ERROR: Message is too long!";
		return false;
	}
	else
	{
		messageErrorElement.textContent = "";
		return true;
	}
}
