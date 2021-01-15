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

SpellsList["Detect Life"] = {

	name: "Detect Life",
	nameAlt: "Detect Life",
	nameShort: "Detect Life",

	classes: ["druid", "paladin", "ranger"], // Cleric ommitted for flavor below

	source: ["HB", 0],

	level: 2,

	school: "Divination",

	time: "1 a",

	range: "Self",

	components: "V,S",

	duration: "Conc, up to 10 min",

	description: "Sense living creatures in 30ft radius; Can discern aura and whether heathly; penetrates barriers but blocked by thicc ones;",

	descriptionFull: "For the duration, you sense the presence of living creatures within 30 feet of you. This spell has no effect on undead or constructs. If a creature in the area is not visible to you, you know its distance and direction.\nIf you sense a creature in this way, you can use your action to discern an aura surrounding the creature that tells you its type and whether it is healthy. A creature will register as healthy if it has more than half of its hit points left and is not suffering from the conditions of disease, poison, or exhaustion.\nThe spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",

	ritual: true,

	psionic: false,

};

SpellList["Detect Life - cleric"] = SpellsList["Detect Life"];
SpellsList["Detect Life - cleric"].name = "Find the gifts of Her Holiness"
SpellsList["Detect Life - cleric"].classes = ["cleric"]

SpellsList["Eldaths' Love"] = {

	name: "Eldath's Love (Sacred Flame)",

	nameAlt: "Sacred Flame",

	classes: ["cleric"],

	source: ["P", 272],

	level: 0,

	school: "Evocatoin",

	save: "Dex",

	time: "1 a",

	range: "60ft",

	components: "V,S",

	duration: "Instantaneous",

	description: "1 creature save or 2d8 Radiant dmg; no bonus for cover on save; +1d8 at CL 11, 17",

	descriptionFull: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.",

	ritual: false,

	psionic: false,

};
