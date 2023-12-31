const expPorNivel = [
    300,
    450,
    675,
    1012,
    1518,
    2277,
    3416,
    5124,
    7886,
    11529,
    14988,
    19484,
    25329,
    32928,
    42806,
    55648,
    72342,
    94045,
    122259,
    158937,
    206618,
    268603,
    349184,
    453939,
    544727,
    667632,
    784406,
    941287,
    1129544,
    1355453,
    1626544,
    1951853,
    2342224,
    3372803,
    4047364,
    5828204,
    6993845,
    8392614,
    10071137,
    120853640,
    145024370,
    174029240,
    208835090,
    417670180,
    835340360,
    1670680720,
];

export function calcRequiredExp(startLevel, endLevel, percentage = 0) {
    if (startLevel > endLevel) {
        throw new Error("startLevel must be less than endLevel");
    }

    const currentExp = (expPorNivel.slice(0, startLevel).reduce((a, b) => a + b, 0) - 
                        expPorNivel.slice(0, startLevel - 1).reduce((a, b) => a + b, 0)) * percentage;
    
    return expPorNivel.slice(0, endLevel - 1).reduce((a, b) => a + b, 0) - 
           expPorNivel.slice(0, startLevel - 1).reduce((a, b) => a + b, 0) - currentExp;
}

export function calcNpcs(requiredExp, npcExp, isParty = false, partyPercentage = 0) {
    console.log("Hello")
    console.log(requiredExp)
    console.log(npcExp)
    if (isParty && partyPercentage === 0) {
        throw new Error("partyPercentage must be set when isParty is True");
    }

    if (isParty) {
        npcExp = npcExp * partyPercentage * 1.1;
    }

    const npcs = requiredExp / npcExp;
    console.log(npcs)

    return npcs.toFixed(2);
}
