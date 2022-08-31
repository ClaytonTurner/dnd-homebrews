var iFileName = "feats.js";

// Define the source
SourceList["OneDNDPT"] = {
	name : "ONE DND Playtest",
	abbreviation : "OneDNDPT",
	group : "Wizards of the Coast",
	url : "https://www.dndbeyond.com/sources/one-dnd"
};

//Feats List
FeatsList["savage attacker"] = {
	name : "Savage Attacker",
	source : ["OneDNDPT", 17],
	description : desc([
		"You have trained to deal particularly damaging strikes.",
    "When you take the Attack Action and hit a target with a Weapon as part of that Action, you can roll the Weapon’s damage dice twice and use either roll against the target.",
    "You can use this benefit only once per turn."
	])
};
