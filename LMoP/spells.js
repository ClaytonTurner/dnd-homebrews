RequiredSheetVersion(12.999);

SpellsList["the maven's borrowed time"] = {

    name : "The Maven's Borrowed Time",
    nameAlt : "Borrowed Time",

    classes : ["sorcerer", "warlock", "wizard"],

    source : ["HB", 0],

    level : 2,

    school : "Div",

    time : "1 a",

    range : "60 ft",

    components : "V,S,M",

    compMaterial : "A tiny bit of crystal with a coating of gold",

    duration : "1 turn",

    save : "Con",

    description : "send one creature forward or backward in time; lose one turn but gain another; Con save or willingly fail",

    descriptionFull : "Choose a creature that you can see within range. The creature if shifted out of time. The target must succeed on a Constitution saving throw or be affected by this spell for the duration; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects." + "\n   " + "A copy of the creature appears alongside the chosen creature, hurled into the present from the future, occupying a space of your choosing within 5 feet of the original creature. The copy is corporeal but ephemeral. If the copy is damaged, that damge is subtracted from the original creature's hit points. The copy takes its turn immediately after the original creature. Immediately after the copy's turn is completed, both the original creature and the copy blink into existence as time attempts to catch up to itself. The creature, without the copy, returns to its original location at the beginning of its second turn after this effect takes place. If the creature's original location is occupied, it returns to the closest space within 5 feet of its original location, as chosen by the caster." + "\n   " + "The creature blinks out of existence, hurled into the future from the present. The creature returns to its original location at the beginning of its second turn after this effect takes place. If the creature's original location is occupied, it returns to the closest space within 5 feet of its original location, as chosen by the caster. A copy of the creature appears alongside the chosen creature, occupying a space of your choosing within 5 feet of the original creature. The copy is corporeal but ephemeral. If the copy is damaged, that damge is subtracted from the original creature's hit points. The copy takes its turn immediately after the original creature. Immediately after the copy's turn is completed, the copy blinks out of existence as time attempts to catch up to itself.",

    ritual : false,

    psionic : false,

};

SpellsList["time divergence"] = {

	name : "Time Divergence",
	nameAlt : "Time Divergence",

	classes : ["sorcerer", "warlock", "wizard", "bard"],

	source : ["HB", 0],

	level : 0,

	school : "Div",

	time : "1 a",

	range : "60 ft",

	components : "V,S",

	duration : "Instantaneous",

	save : "Wis",

	description : "Distract an enemy and impose disadvantage on their first attack roll until your next turn; Wis save",

	descriptionFull : "Choose a creature that you can see within range. The creature is briefly distracted as you force them to experience multiple potential timelines at once. The target must succeed on a Wisdom saving throw or be affected by this spell for the duration. If a creature fails its saving throw, it has disadvantage on the first attack roll it makes before the end of your next turn." + "\n   " + "This spell can target more than one creature when you reach higher levels: two creatures at 5th level, three creatures at 11th level, and four creatures at 17th level.",

	ritual : false,

	psionic : false,

};

SpellsList["nature's ladder"] = {
    name : "Nature's Ladder",
    nameAlt : "Nature's Ladder",
    classes : ["druid", "ranger"],
    source : ["HB", 0],
    level : 1,
    school : "Trans",
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "An acorn",
    duration : "24 hours",
    description : "Grow a 1 ft diameter perfect climbing tree up to 20+20/SL ft tall with AC 5 and 25 hit points",
    descriptionFull : "You cause a tree to sprout from an unoccupied space of solid ground that you can see within range. When you cast the spell, you determine the height of the tree, which can be a maximum of 20 feet tall. If there isn’t enough room for the tree to grow to full height, the tree attains the maximum possible height in the space available. The tree has a 1-foot-diameter trunk and evenly spaced branches perfect for climbing. The tree has AC 5 and 25 hit points. After 24 hours, or if the tree is reduced to 0 hit points, it instantly vanishes."+
    AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can increase the height of the tree by 20 feet for each slot level above 1st.",
    ritual : false,
    psionic : false,
};
