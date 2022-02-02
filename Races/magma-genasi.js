/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds 2 subraces to the genasi race from Elemental Evil Player's Companion
				This is taken from the GM Binder website (https://www.gmbinder.com/share/-LfNVTUU2xl9IAZjPDV_)
				These subraces have been made by Azure876
	Code by:	MorePurpleMoreBetter
	Date:		2019-07-29 (sheet v13.0.0beta18)
*/

var iFileName = "Genasi - Magma.js";
RequiredSheetVersion(13);

SourceList["CPTC:AS"] = {
	name : "CptnCancer: Additional Subraces",
	abbreviation : "CPTC:AS",
	group : "GM Binder",
	url : "https://www.gmbinder.com/share/-LW8FYMM5sotP5W8WpcR",
	date : "2022/02/02"
};


RaceList["magma genasi"] = {
	regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bmagma?\b).*$/i,
	name : "Magma genasi",
	sortname : "Genasi, Magma",
	source : [["CPTC:AS", 0]],
	plural : "Magma genasi",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 60]],
	languageProfs : ["Common", "Primordial"],
	age : " reach adulthood in their late teens and live up to 120 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [1, 0, 2, 0, 0, 0],
	trait : "Magma Genasi (+2 Constitution, +1 Strength)\n\nElemental Legacy:\n   I know the Control Flame cantrip.\n   At 3rd level, I can cast the Inflict Wounds once per long rest dealing fire damage.\n   At 5th level, I can cast the Heat Metal spell once per long rest with a range of touch.\n   Constitution is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Elemental Legacy (level 1)",
		spells : ["control flame"],
		selection : ["control flame"],
		firstCol : 'atwill'
	},
	features : {
		"inflict wounds" : {
			name : "Elemental Legacy (level 3)",
			limfeaname : "Inflict Wounds (Fire)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Elemental Legacy (level 3)",
				spells : ["inflict wounds"],
				selection : ["inflict wounds"],
				firstCol : "oncelr"
			}
		},
		"warding wind" : {
			name : "Elemental Legacy (level 5)",
			limfeaname : "Heat Metal (Touch)",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Elemental Legacy (level 5)",
				spells : ["heat metal"],
				selection : ["heat metal"],
				firstCol : "oncelr"
			}
		}
	},
	dmgres : ["Fire"]
};