RequiredSheetVersion(12.999);

// OneDnd Updates
// Level 1 Spells
SpellsList["compelled duel"].classes.push("cleric");
SpellsList["divine favor"].classes.push("cleric");
SpellsList["searing smite"].classes.push("cleric");
SpellsList["thunderous smite"].classes.push("cleric");
SpellsList["wrathful smite"].classes.push("cleric");
SpellsList["branding smite"].classes.push("cleric");
SpellsList["thunderous smite"].classes.push("cleric");
// Level 2 Spells
SpellsList["misty step"].classes.push("cleric")


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
// Note: Classes might not be fully up to date for these spells - just updating for my purposes (for my Cleric)
SpellsList["expeditious retreat"].classes = ["cleric", "sorcerer", "warlock", "wizard"]

// Cantrips
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

// Level 1 Spells
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

SpellsList["divine retribution"] = {
	name : "Divine Retribution",
	classes : ["cleric"],
	source : ["TOH", 279],
	level : 1,
	school : "Evoc",
	time : "1 rea",
	range : "Self",
	components : "V",
	duration : "Instantaneous",
	save: "CON",
	description : "On 0hp; (SL)d8 + incoming radiant damage to attacker. +1d8 if fiend/undead. CON save or stunned for 1 minute. Repeat save each turn.",
	descriptionFull : "With a last word before you fall unconscious, this spell inflicts radiant damage to your attacker equal to 1d8 + the amount of damage you took from the triggering attack. If the attacker is a fiend or undead, it takes an extra 1d8 radiant damage. The creature then must succeed on a Constitution saving throw or become stunned for 1 minute. At the end of each of its turns, the creature can make another Constitution saving throw. On a successful save, it is no longer stunned.\n At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
	ritual : false,
	psionic : false,
}

SpellsList["feint"] = {
	name : "Feint",
	classes : ["cleric"],
	source : ["TOH", 282],
	level : 1,
	school : "Illus",
	time : "1 bns",
	range : "30 ft",
	components : "V",
	duration : "1 round",
	description : "Advantage on next attack against targeted creature before next turn.",
	descriptionFull : "You create a momentary, flickering duplicate of yourself just as you make an attack against a creature. You have advantage on the next attack roll you make against the target before the end of your next turn as it's distracted by your illusory copy.",
	ritual : false,
	psionic : false,
}

SpellsList["gird the spirit"] = {
	name : "Gird the Spirit",
	classes : ["cleric"],
	source : ["TOH", 284],
	level : 1,
	school : "Abjur",
	time : "1 rea",
	range : "30 ft",
	components : "V,S",
	duration : "1 minute",
	description : "You/Crea w/in 30ft is hit by an undead crea attack: immunity to ability score reduction.",
	descriptionFull : "When you or a creature within 30ft of you is hit by an attack from an undead creature, your magic protects the target creature from the lifesapping energies of the undead. For the duration, the target has immunity to effects from undead creatures that reduce its ability scores, such as a shadow's Strength Drain, or its hit point maximum, such as a specter's Life Drain. This spell doesn't prevent damage from those attacks: it prevents only the reduction in ability score or hit point maximum.",
	ritual : false,
	psionic : false,
}

SpellsList["lightless torch"] = {
	name : "Lightless Torch",
	classes : ["cleric"],
	source : ["TOH", 284],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "1 hour",
	save: "WIS",
	description : "Touch object 10ft or smaller/dimension; sheds 30ft shadowy miasma. Can see out from inside. Shadowy wisps from outside.",
	descriptionFull : "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the objects sheds a shadowy miasma in a 30-foot radius. A creature with darkvision inside the radius sees the area as if it were filled with bright light. The miasma doesn't shed light, and a creature without darkvision inside the radius can still see outside the radius as normal. A creature with darkvision outside the radius or a creature without darkvision sees only that the object is surrounded by wisps of shadow\n Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the effect. Though the effect doesn't shed light, it can be dispelled if the area of a darkness spell overlaps the area of this spell.\n If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.n At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the duration increases by 2 hours for each slot level above 1st.",
	ritual : false,
	psionic : false,
}

SpellsList["muted foe"] = {
	name : "Muted Foe",
	classes : ["cleric"],
	source : ["TOH", 296],
	level : 1,
	school : "Abjur",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "1 minute",
	description : "Touch nonmagical weapon; On next hit: 1d6 extra thunder dmg. Target defeaned/imm to thunder dmg/no verbal components. WIS save at end of each turn.",
	descriptionFull : "You touch a nonmagical weapon. The next time a creature hits with the affected weapon before the spell ends, the weapon booms with a thunderous peal as the weapon strikes. The attack deals an extra 1d6 thunder damage to the target, and the target becomes deafened, immune to thu nder damage, and unable to cast spells with verbal components for 1 minute. At the end of each of its turns, the target can make a Wisdom saving throw. On a success, the effect ends.\n At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
	ritual : false,
	psionic : false,
}

SpellsList["outmaneuver"] = {
	name : "Outmaneuver",
	classes : ["cleric"],
	source : ["TOH", 297],
	level : 1,
	school : "Ench",
	time : "1 rea",
	range : "30 ft",
	components : "S",
	duration : "Instantaneous",
	save: "WIS",
	description : "Ally has opp attack; On failed save, speed reduced to 0 and caster can move up to their speed toward target.",
	descriptionFull : "When a creature provokes an opportunity attack from an ally you can see within range, you can force the creature to make a Wisdom saving throw. On a failed save, the creature's movement is reduced to 0, and you can move up to your speed toward the creature without provoking opportunity attacks. This spell doesn't interrupt your ally's opportunity attack, which happens before the effects of the spell.",
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

// Level 2 Spells
SpellsList["fuse armor"] = {
	name : "Fuse Armor",
	classes : ["cleric"],
	source : ["TOH", 306], // TODO: Update this
	level : 2,
	school : "Abjur",
	time : "1 bns",
	range : "30 ft",
	components : "V, S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "target metal obj or construct. Objects can't move. Creatures reduce speed by 10ft",
	descriptionFull : "Choose a manufactured metal object with movable parts, such as a drawbridge pulley or winch or a suit of heavy or medium metal armor, that you can see within range. You cause the object's moveable parts to fuse together for the duration. The object's movable aspects can't be moved: a pulley's wheel won't turn and the joints of armor won't bend. \n A creature wearing armor affected by this spell has its speed reduced by 10 ft and has disadvantage on weapon attacks and ability checks that use Strength or Dexterity. At the end of each of its turns, the creature wearing the armor can make a Strength saving throw. On a success, the spell ends on the armor. \n A creature in physical contact with an affected object that isn't a suit of armor can use its action to make a Strength check against your spell save DC. On a success, the spell ends on the object. \n If you target a construct with this spell, it must succeed on a Strength saving throw or have its speed reduced by 10 ft and have disadvantage on weapon attacks. At the end of each of its turns, the construct can make another Strength saving throw. On a success, the spell ends on the construct \n At Higher Levels. When you cast this spell using a spell slot of 3rd level 0or higher, you can target one additional object for each slot level above 2nd. The objects must be within 30 feet of each other when you target them.",
	ritual : false,
	psionic : false,
}

SpellsList["mantle of the brave"] = {
	name : "Mantle of the Brave",
	classes : ["cleric"],
	source : ["TOH", 306], // TODO: Update this
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V, S",
	duration : "1 hour",
	description : "Target 4 creatures. Adv on next spell/effect which causes frightened.",
	descriptionFull : "You touch up to four individuals, bolstering their courage. The next time a creature affected by this spell must make a saving throw against a spell or effect that would cause the frightened condition, it has advantage on the roll. Once a creature has received this benefit, the spell ends for that creature.",
	ritual : false,
	psionic : false,
}

SpellsList["portal trap"] = {
	name : "Portal Trap",
	classes : ["cleric"],
	source : ["TOH", 306], // TODO: Update this
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "WIS",
	description : "5sq ft illusion portal. Wis save if interacted. Fail teleports d8 dir 30ft away.",
	descriptionFull : "You create a magical portal on a surface in an unoccupied space you can see within range. The portal occupies up to 5 square feet of the surface and is instantly covered with an illusion. The illusion looks like the surrounding terrain or surface features, such as a mortared stone if the portal is placed on a stone wall, or a simple image of your choice like those created by the minor illusion spell. A creature that touches, steps on, or otherwise interacts with or enters the portal must succeed on a Wisdom saving throw or be teleported to an unoccupied space up to 30 feet away in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature can't be teleported into a solid object. \n Physical interaction with the illusion reveals it to be an illusion, but such touching triggers the portal's effect. A creature that uses an action to examine the area where the portal is located can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. \n At Higher Levels. When you cast thsi spell using a spell slot of 3rd level or higher, you can create one additional portal for each slot level above 2nd.",
	ritual : false,
	psionic : false,
}

SpellsList["shadow's brand"] = {
	name : "Shadow's Brand",
	classes : ["cleric"],
	source : ["TOH", 306], // TODO: Update this
	level : 2,
	school : "Nec",
	time : "1 a",
	range : "Touch",
	components : "S",
	duration : "Until Dispelled",
	save : "CON",
	description : "Brand creature on failed save. Disadv on ability checks against shadow fey.",
	descriptionFull : "You draw a rune or inscription no larger than your hand on the target. The target must succeed on a Constitution saving throw or be branded with the mark on a location of your choose. The brand appears as an un\nelligible mark to most creatures. Those who understand the Umbral language recognize it as a mark indicating the target is an enemy of the shadow fey. Shadow fey who view the brand see it outlined in a fa\n glow. The brand can be hidden by mundane means, such as clothing, but it can be removed only by the remove curse spell. / While branded, the target has disadvantage on ability checks when \neracting socially with shadow fey.",
	ritual : false,
	psionic : false,
}

SpellsList["sightburst"] = {
	name : "Sightburst",
	classes : ["cleric"],
	source : ["TOH", 306], // TODO: Update this
	level : 2,
	school : "Div",
	time : "1 a",
	range : "Self (100-ft radius)",
	components : "V, S",
	duration : "1 rnd",
	description : "Blindsight to a range of 100ft and loc/adv saves related to natural hazards",
	descriptionFull : "A wave of echoing sound emanates from you. Until the start of your next turn, you have blindsight out to a range of 100 feet, and you know the location of any natural hazards within that area. You have advantage on saving throws made against hazards detected with this spell. / At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the duration is concentration, up to 1 minute. When you use a spell slot of 5th level or higher, the duration is concentration, up to 10 minutes. When you use a spell slot of 7th level or higher, the duration is concentration, up to 1 hour.",
	ritual : false,
	psionic : false,
}

SpellsList["silvershout"] = {
	name : "Silvershout",
	classes : ["cleric"],
	source : ["TOH", 306], // TODO: Update this
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Self (30-ft cone)",
	components : "V, S, M (ounce of silver powder)",
	duration : "Inst",
	save : "CON",
	description : "On failed save, shapeshifters glow and attacks considered silvered",
	descriptionFull : "You unleash a shout that coats all creatures in a 30-foot cone in silver dust. If a creature in that area is a shapeshifter, the dust covering it glows. In addition, each creature in the area must make a Constitution saving throw. On a failed save, weapon attacks against that creature are considered to be silvered for the purposes of overcoming resistance and immunity to nonmagical attacks that aren't silvered for 1 minute.",
	ritual : false,
	psionic : false,
}

// Note: This spell is modified from its original text
SpellsList["threshold slip"] = {
	name : "Threshold Slip",
	classes : ["cleric"],
	source : ["TOH", 306], // TODO: Update this
	level : 2,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Inst",
	description : "Pass through touching junction to another junction with unoccupied space for travelers within 60ft",
	descriptionFull : "The threshold of a doorway, the sill of a window, the junction where the floor meets the wall, the intersection of two walls - these are all points of travel for you. When you cast this spell, you can step into the junction of two surfaces, slip through the boundary of the Material Plane, and reappear in an unoccupied space with another junction you can see within 60 feet. \n You can take one willing creature of smaller size that you're touching with you. The target junction must have unoccupied spaces for both of you to enter when you reappear or the spell fails.",
	ritual : false,
	psionic : false,
}
