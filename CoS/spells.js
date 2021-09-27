// Syntax definition/example here: https://github.com/morepurplemorebetter/MPMBs-Character-Record-Sheet/blob/master/additional%20content%20syntax/Homebrew%20Syntax%20-%20SpellsList.js
var iFileName = "Homebrew - SpellsList.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

SpellsList["claw's pillars of lightning"] = {

	name : "Claw's Pillars of Lightning",
	nameAlt : "Lightning Pillars",

	classes : ["sorcerer", "wizard"],

	source : ["HB", 0],

	level : 4,

	school : "Evoc",

	time : "1 a",

	range : "30 ft",

	components : "S,M",

	compMaterial : "Tufts of Fur",

	duration : "Conc, 1 min",

	save : "Con",

	description : "3 fur tufts; any creature contacting engulfed in 5ft wide 10ft high electricity; 6d6 lightning damage; save halves",

	descriptionFull : "Currents of wind scatter tufts of charged fur to three different unoccupied locations within range. When a creature enters a space occupied by one of these tufts for the first time on a turn or starts its turn there, the creature is engulfed by a 5-foot-radius, 10-foot-high pillar of discharged electricity and must make a Constitution saving throw as the current courses through its body. On a failed save, the creature takes 6d6 lightning damage and its speed is reduced to 0 for the rest of the turn. On a successful save, the creature takes half damage and its speed is not reduced." + "\n   " + "The tufts of fur are nearly invisible and require a successful Intelligence (Investigation) check against your spell save DC to determine their location." + "\n   " + "On each of your turns after you cast this spell, you may use a bonus action to move one of the tufts of fur to another unoccupied location within range." + "\n   " +"At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the number of charged tufts released increases by one for each spell level above 4th.",

	ritual : false,

	psionic : false,

};

SpellsList["claw's crystal aero"] = {

	name : "Claw's Crystal Aero",
	nameAlt : "Crystal Aero",

	classes : ["sorcerer", "wizard"],

	source : ["HB", 0],

	level : 5,

	school : "Evoc",

	time : "1 a",

	range : "self (60 ft )",

	components : "V,S,M",

	compMaterial : "Small Crystals",

	duration : "Instantaneous",

	save : "Dex",

	description : "60ft cone; 4d8 slashing or bludgeoning damage. 4d8+1d8/SL lightning damage on failed save.",

	descriptionFull : "Holding crystals in your hand, your hand starts to channel electricity. The crystals start statically forming into shapes guided by your electricity that are either sharp or blunt in nature. With a deep breath and exhalation you cause statically charged crystals to erupt from your hands in a 60-foot cone. Each creature in this 60-foot cone must make a Dexterity saving throw. Any creature hit by this spell takes 4d8 slashing or bludgeoning damage (spellcaster chooses based on crystal shape). Any creature failing the Dexterity saving throw additionally takes 4d8 lightning damage." + "\n   " +"At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the lightning damage increases by 1d8 for each slot level about 5th.",

	ritual : false,

	psionic : false,

};


SpellsList["dream's weave compression"] = {

	name : "Dream's Weave Compression",
	nameAlt : "Weave Compression",

	classes : ["sorcerer"],

	source : ["HB", 0],

	level : 5,

	school : "Evoc",

	time : "1 a",

	range : "90 ft",

	components : "V,S,M",

	compMaterial : "Planar shard (500gp)",

	duration : "Instantaneous",

	save : "Str",

	description : "8d8 force damage and knocks creature prone; save for half damage only. Disadv for surge rolls.",

	descriptionFull : "Wielding the power of wild magic and interplanar forces you take control of the magical weave itself for an instant and envelope a creature of your choosing that you can see. A creature targeted by this spell must make a Strength saving throw. A creature takes 8d8 force damage on a failed save, or half as much damage on a successful one. On a failed save the creature also falls prone. This spell can be cast into the ethereal plane from the material plane if the caster has sight (e.g. Truesight). Wild magic surge rolls have disadvantage when preparing to cast this spell.",

	ritual : false,

	psionic : false,

};
