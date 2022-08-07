var iFileName = "weapons.js";
RequiredSheetVersion(12.999);

SourceList["CT:EI"] = {
	name : "ClaytonTurner: Ethereal Incursion Weapons",
	abbreviation : "CT:EI",
	date : "2022/08/07"
}

// Battleaxe flavored as Maul
WeaponsList["dragon maul"] = {
	regExpSearch : /^(?=.*dragon)(?=.*maul).*$/i,
	name : "Dragon maul",
	source : ["CT:EI", 0],
	list : "melee",
	ability : 1,  // Strength
	type : "Martial",
	damage : [1, 8, "Bludgeoning"],
	range : "Melee",
	weight : 4,
	description : "Versatile (1d10)",
	abilitytodamage : true
}