
window.onload = function()
{
	generateMaintenanceDuration();
}

function generateMaintenanceDuration()
{
	const maintenanceDurationElement = document.getElementById("maintenance_duration");
	console.log(maintenanceDurationElement);
	
	// Read Config File
	// Check if maintenance is true
	// Process maintenance details
	// Generate maintenance duration
	
	if (true)
	{
		const maintenanceDuration = "TEST";
		maintenanceDurationElement.textContent = maintenanceDuration;
		
		//maintenanceDurationElement.textContent = (maintenanceDuration != null || maintenanceDuration != "" ? maintenanceDuration : "<MAINT_EST_DUR>");
	}
	else
	{
		maintenanceDurationElement.textContent = "<?>";
	}
}
