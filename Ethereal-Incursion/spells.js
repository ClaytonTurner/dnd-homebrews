RequiredSheetVersion(12.999);

// OneDnd Updates
SpellsList["compelled duel"].classes.push("cleric");
SpellsList["divine favor"].classes.push("cleric");
SpellsList["searing smite"].classes.push("cleric");
SpellsList["thunderous smite"].classes.push("cleric");
SpellsList["wrathful smite"].classes.push("cleric");
SpellsList["branding smite"].classes.push("cleric");
SpellsList["thunderous smite"].classes.push("cleric");


SpellsList["guidance"] = {
	name : "Guidance",
	classes : ["cleric"],
	source : ["UA-2022-ClericandSpecies", 19],
	level : 0,
	school : "Div",
	time : "1 rea",
	range : "10 ft",
	components : "V, S",
	duration : "Instantaneous",
	description : "Self/Ally w/in 10 feet fails ability check; add d4 to check.",
	descriptionFull : "When you or an ally within 10 feet of you fail an ability check, you channel magical insight to the creature who failed the Ability Check. That creature can roll a d4 and add the number rolled to the check, potentially turning it into a success.",
	ritual : false,
	psionic : false,
}

SpellsList["resistance"] = {
	name : "Resistance",
	classes : ["cleric"],
	source : ["UA-2022-ClericandSpecies", 25],
	level : 0,
	school : "Abjur",
	time : "1 rea",
	range : "10 ft",
	components : "V, S",
	duration : "Instantaneous",
	description : "Self/Ally w/in 10 feet fails saving throw; That creature adds d4 to check.",
	descriptionFull : "When you or an ally within 10 feet of you fail a saving throw, you channel magical protection to the creature who failed the Saving Throw. That creature can roll a d4 and add the number rolled to the save, potentially turning it into a success.",
	ritual : false,
	psionic : false,
}

// Tome of Heroes Updates
// Note: Cleric is only added to Expeditious Retreat & Hypnic Jerk for Portal Domain (it's just easier this way)
SpellsList["expeditious retreat"].classes = ["cleric", "sorcerer", "warlock", "wizard"]

SpellsList["hypnic jerk"] = {
	name : "Hypnic Jerk",
	classes : ["cleric", "wizard"],
	source : ["TOH", 288],
	level : 0,
	school : "Illus",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea 1d6 Force dmg; fail by 5 or more, target drops 1 carried obj in same space",
	descriptionFull : "Strange things happen in the mind and body in that moment between waking and sleeping. One of the most common is being startled awake by a sudden feeling of falling. With a snap of your fingers, you trigger that sensation in a creature you can see within range. The target must succeed on a Wisdom saving throw or take 1d6 force damage. If the target fails the saving throw by 5 or more, it drops one object it is holding. A dropped object lands in the creature's space. \n The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
	ritual : false,
	psionic : false,
};

SpellsList["adjust position"] = {
	name : "Adjust Position",
	classes : ["bard", "cleric", "warlock", "wizard"],
	source : ["TOH", 273],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "30 ft",
	components : "V",
	duration : "Instantaneous",
	description : "1 willing crea; Move 5 feet; No provoking attacks; No physical obstacles can block path.",
	descriptionFull : "You adjust the location of an ally to a better tactical position. You move one willing creature within range 5 feet. This movement does not provoke opportunity attacks. The creature moves bodily through the intervening space (as opposed to teleporting), so there can be no physical obstancle (such as a wall or a door) in the path. \n At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target an additional willing creature for each slot level above 1st.",
	ritual : false,
	psionic : false,
}

SpellsList["subliminal aversion"] = {
	name : "Subliminal Aversion",
	classes : ["bard", "cleric", "druid", "wizard"],
	source : ["TOH", 306],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "30 ft",
	components : "V, S",
	duration : "1 min",
	description : "Melee attacks against target w/in 5ft take 1d4 psychic damage",
	descriptionFull : "You ward a creature within range against attacks by making the choice to hit them painful. When the warded creature is hit with a melee attack from within 5 feet of it, the attacker takes 1d4 Psychic damage.",
	ritual : false,
	psionic : false,
}
