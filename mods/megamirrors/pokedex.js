'use strict';

/**@type {{[k: string]: TemplateData}} */
let BattlePokedex = {	
abomasnowmegax: {
		num: 460,
		species: "Abomasnow-Mega-X",
		baseSpecies: "Abomasnow",
		forme: "Mega-X",
		formeLetter: "M",
		types: ["Grass", "Water"],
		baseStats: {hp: 90, atk: 112, def: 95, spa: 102, spd: 135, spe: 60},
		abilities: {0: "Regenerator"},
		heightm: 2.7,
		weightkg: 185,
		color: "White",
		eggGroups: ["Monster", "Grass"],
	},
  
	absolmegay: {
		num: 359,
		species: "Absol-Mega-Y",
		baseSpecies: "Absol",
		forme: "Mega-Y",
		formeLetter: "M",
		types: ["Dark", "Electric"],
		baseStats: {hp: 65, atk: 110, def: 60, spa: 115, spd: 100, spe: 115},
		abilities: {0: "Galvanize"},
		heightm: 1.2,
		weightkg: 49,
		color: "White",
		eggGroups: ["Field"],
	},
  aerodactylmegay: {
		num: 142,
		species: "Aerodactyl-Mega-Y",
		baseSpecies: "Aerodactyl",
		forme: "Mega-Y",
		formeLetter: "M",
		types: ["Rock", "Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 105, def: 75, spa: 130, spd: 85, spe: 140},
		abilities: {0: "Savagery"},
		heightm: 2.1,
		weightkg: 79,
		color: "Purple",
		eggGroups: ["Flying"],
	},
	aggronmegay: {
		species: "Aggron-Mega-Y",
		baseSpecies: "Aggron",
		forme: "Mega-Y",
		formeLetter: "M",
		types: ["Steel", "Ghost"],
		baseStats: {hp: 70, atk: 90, def: 125, spa: 145, spd: 150, spe: 50},
		abilities: {0: "Unaware"},
		weightkg: 395,
	},
	alakazammegax: {
		species: "Alakazam-Mega-X",
		baseSpecies: "Alakazam",
		forme: "Mega-X",
		formeLetter: "M",
		types: ["Psychic"],
		baseStats: {hp: 55, atk: 135, def: 45, spa: 135, spd: 95, spe: 135},
		abilities: {0: "Sheer Force"},
		weightkg: 48,
	},
	altariamegay: {
		species: "Altaria-Mega-Y",
		baseSpecies: "Altaria",
		forme: "Mega-Y",
		formeLetter: "M",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 75, atk: 70, def: 100, spa: 125, spd: 105, spe: 115},
		abilities: {0: "Berserk"},
		weightkg: 20.6,
	},
	ampharosmegax: {
		species: "Ampharos-Mega-X",
		baseSpecies: "Ampharos",
		forme: "Mega-X",
		formeLetter: "M",
		types: ["Electric", "Ice"],
		baseStats: {hp: 90, atk: 125, def: 120, spa: 140, spd: 100, spe: 35},
		abilities: {0: "Refrigerate"},
		weightkg: 48,
	},
	audinomegay: {
		species: "Audino-Mega-Y",
		baseSpecies: "Audino",
		forme: "Mega-Y",
		formeLetter: "M",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 103, atk: 60, def: 86, spa: 130, spd: 86, spe: 80},
		abilities: {0: "Magic Guard"},
		weightkg: 32,
	},
	banettemegay: {
		species: "Banette-Mega-Y",
		baseSpecies: "Banette",
		forme: "Mega-Y",
		formeLetter: "M",
		types: ["Ghost", "Normal"],
		baseStats: {hp: 64, atk: 135, def: 85, spa: 83, spd: 93, spe: 95},
		abilities: {0: "Fluffy"},
		weightkg: 13,
	},
	beedrillmegay: {
		species: "Beedrill-Mega-Y",
		baseSpecies: "Beedrill",
		forme: "Mega-Y",
		formeLetter: "M",
		types: ["Bug", "Dark"],
		baseStats: {hp: 65, atk: 120, def: 90, spa: 15, spd: 100, spe: 105},
		abilities: {0: "Prankster"},
		weightkg: 40.5,
	},
	blastoisemegax: {
		species: "Blastoise-Mega-X",
		baseSpecies: "Blastoise",
		forme: "Mega-X",
		formeLetter: "M",
		types: ["Water", "Steel"],
		baseStats: {hp: 79, atk: 138, def: 110, spa: 100, spd: 145, spe: 58},
		abilities: {0: "Heavy Metal"},
		weightkg: 480.5,
	},
	cameruptmegax: {
		species: "Camerupt-Mega-X",
		baseSpecies: "Camerupt",
		forme: "Mega-X",
		formeLetter: "M",
		types: ["Fire", "Poison"],
		baseStats: {hp: 70, atk: 150, def: 90, spa: 105, spd: 75, spe: 70},
		abilities: {0: "Regenerator"},
		weightkg: 320.5,
	},
};

exports.BattlePokedex = BattlePokedex;
