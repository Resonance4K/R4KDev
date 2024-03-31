
window.addEventListener("load", function()
{
	populateLevelInfoDetails();
});

// -------------------------------------------------------------------------------

function populateLevelInfoDetails()
{
	const levelInfoContentElement = document.getElementById("level_info_content_quake3");

	if (levelInfoContentElement != null)
	{
		const imageElements = levelInfoContentElement.getElementsByClassName("image");

		for (let i = 0; i < imageElements.length; i++)
		{
			const q3icon = imageElements[i].getElementsByClassName("q3icon")[0];

			const q3iconTitleSplit = q3icon.title.split(" x");
			const iconTitle = q3iconTitleSplit[0];
			const iconCount = q3iconTitleSplit[1];
			const iconCoordinates = Q3_ICONS.get(iconTitle);

			q3icon.style.backgroundPositionX = (iconCoordinates.x * -q3icon.clientWidth) + "px";
			q3icon.style.backgroundPositionY = (iconCoordinates.y * -q3icon.clientHeight) + "px";

			if (iconCount != null)
			{
				const q3iconText = imageElements[i].getElementsByClassName("q3icon_text")[0];
				q3iconText.textContent = "x" + iconCount;
			}
		}
	}
}

const Q3_ICONS = new Map(Object.entries({

	// Weapons
	"Machine Gun": {x:30,y:3},
	"Shotgun": {x:34,y:3},
	"Grenade Launcher": {x:28,y:3},
	"Rocket Launcher": {x:33,y:3},
	"Plasma Gun": {x:31,y:3},
	"Railgun": {x:32,y:3},
	"Lightning Gun": {x:29,y:3},
	"BFG10K": {x:25,y:3},

	// Items (Ammo)
	"Bullets": {x:4,y:3},
	"Shotgun Shells": {x:8,y:3},
	"Grenades": {x:2,y:3},
	"Rockets": {x:7,y:3},
	"Plasma Cells": {x:5,y:3},
	"Slugs": {x:6,y:3},
	"Lightning Charge": {x:3,y:3},
	"BFG Ammo": {x:1,y:3},

	// Items (Health and Armor)
	"Red Armor": {x:12,y:3},
	"Yellow Armor": {x:11,y:3},
	"Green Armor": {x:10,y:3},
	"Armor Shard": {x:9,y:3},
	"5 Health": {x:13,y:3},
	"25 Health": {x:14,y:3},
	"50 Health": {x:15,y:3},
	"Mega Health": {x:21,y:3},

	// Items (Usable)
	"Medkit": {x:20,y:3},
	"Personal Teleporter": {x:24,y:3},

	// Items (Powerups)
	"Quad Damage": {x:22,y:3},
	"Regeneration": {x:23,y:3},
	"Haste": {x:18,y:3},
	"Invisibility": {x:19,y:3},
	"Battle Suit": {x:16,y:3},
	"Flight": {x:17,y:3},

	// Bots
	"No Bot Support": {x:34,y:4},
	"Custom Bots": {x:0,y:3}

}));
