var iFileName = "group-maneuvers.js";
RequiredSheetVersion(12.999);

SourceList["CT:EI:M"] = {
    name : "ClaytonTurner: Ethereal Incursion Maneuevers",
    abbreviation : "CT:EI",
    date : "2022/08/30"
}

// Adding this individually to the relevant classes
// Known issue: Does not automatically appear in Limited Features
ClassList.barbarian.features["group maneuvers"] = {
    name : "Group Maneuver",
    source : ["CT:EI:M", 0],
    minlevel : 1,
    usages: levels.map(function (n) {
                return n < 5 ? 2 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6;
            }),
    recovery : "long rest",
    description : desc([
        "As a reaction to a predefined trigger, you may perform a maneuver from the following list, provided the trigger is fulfilled. This may be used a number of times equal to your proficiency bonus per long rest."
    ]),
    extraname : "Group Maneuever",
    extrachoices : ["Reflect Magic", "Whirling Magic"],
    "reflect magic": {
        source : ["CT:EI:M", 0],
        name: "Reflect Magic",
        description : "\n    " + "If an ally makes a ranged spell attack against a target within 10 feet of you and misses, you can use your reaction to redirect the magic back toward the target. Make a new attack roll using your proficiency bonus and your Dexterity or spellcasting ability modifier (your choice).",
        action : ["reaction", ""]
    },
    "whirling magic": {
        source : ["CT:EI:M", 0],
        name: "Whirling Magic",
        description : "\n    " + "When an ally you can see or hear within 30 feet of you makes a melee weapon attack against a creature, you can use your reaction to enchant your ally's weapon, allowing them to create a damaging burst of force with their weapon instead. In lieu of the attack, your ally can force each creature within 5 feet of themself to succeed on a Dexterity saving throw or take force damage equal to a damage roll made with the weapon, plus additional force damage equal to your spellcasting modifier.",
        action : ["reaction", ""]
    }
};

ClassList.druid.features["group maneuvers"] = {
    name : "Group Maneuver",
    source : ["CT:EI:M", 0],
    minlevel : 1,
    usages: 2,
    recovery : "long rest",
    description : desc([
        "As a reaction to a predefined trigger, you may perform a maneuver from the following list, provided the trigger is fulfilled."
    ]),
    extraname : "Group Maneuever",
    extrachoices : ["Reflect Magic", "Whirling Magic"],
    "reflect magic": {
        source : ["CT:EI:M", 0],
        name: "Reflect Magic",
        description : "\n    " + "If an ally makes a ranged spell attack against a target within 10 feet of you and misses, you can use your reaction to redirect the magic back toward the target. Make a new attack roll using your proficiency bonus and your Dexterity or spellcasting ability modifier (your choice).",
        action : ["reaction", ""]
    },
    "whirling magic": {
        source : ["CT:EI:M", 0],
        name: "Whirling Magic",
        description : "\n    " + "When an ally you can see or hear within 30 feet of you makes a melee weapon attack against a creature, you can use your reaction to enchant your ally's weapon, allowing them to create a damaging burst of force with their weapon instead. In lieu of the attack, your ally can force each creature within 5 feet of themself to succeed on a Dexterity saving throw or take force damage equal to a damage roll made with the weapon, plus additional force damage equal to your spellcasting modifier.",
        action : ["reaction", ""]
    }
};

ClassList.wizard.features["group maneuvers"] = {
    name : "Group Maneuver",
    source : ["CT:EI:M", 0],
    minlevel : 1,
    usages: 2,
    recovery : "long rest",
    description : desc([
        "As a reaction to a predefined trigger, you may perform a maneuver from the following list, provided the trigger is fulfilled."
    ]),
    extraname : "Group Maneuever",
    extrachoices : ["Reflect Magic", "Whirling Magic"],
    "reflect magic": {
        source : ["CT:EI:M", 0],
        name: "Reflect Magic",
        description : "\n    " + "If an ally makes a ranged spell attack against a target within 10 feet of you and misses, you can use your reaction to redirect the magic back toward the target. Make a new attack roll using your proficiency bonus and your Dexterity or spellcasting ability modifier (your choice).",
        action : ["reaction", ""]
    },
    "whirling magic": {
        source : ["CT:EI:M", 0],
        name: "Whirling Magic",
        description : "\n    " + "When an ally you can see or hear within 30 feet of you makes a melee weapon attack against a creature, you can use your reaction to enchant your ally's weapon, allowing them to create a damaging burst of force with their weapon instead. In lieu of the attack, your ally can force each creature within 5 feet of themself to succeed on a Dexterity saving throw or take force damage equal to a damage roll made with the weapon, plus additional force damage equal to your spellcasting modifier.",
        action : ["reaction", ""]
    }
};
