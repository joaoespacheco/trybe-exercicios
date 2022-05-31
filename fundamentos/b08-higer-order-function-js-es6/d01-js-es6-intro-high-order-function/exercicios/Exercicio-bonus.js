const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
    const dmgMin = 15;
    const dragonDamage = Math.floor(Math.random() * (dragon.strength - dmgMin + 1) + dmgMin);
    return dragonDamage;
}

const warriorAttack = (warrior) => {
    const dmgMin = warrior.strength
    const dmgMax = dmgMin * warrior.weaponDmg;
    const damageWarrior = Math.floor(Math.random() * (dmgMax - dmgMin + 1) + dmgMin)
    return damageWarrior
}

const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const dmgMin = mage.intelligence;
    const dmgMax = dmgMin * 2;
    const turnStatus = {
        manaSpent: 0,
        damageDealt: 'Não há mana suficiente',
    };

    if (mageMana >= 15) {
        const mageDamage = Math.floor(Math.random() * (dmgMax - dmgMin + 1) + dmgMin);
        turnStatus.manaSpent = 15;
        turnStatus.damageDealt = mageDamage;
        return turnStatus;
    }
    return turnStatus;
}

const gameActions = {
    warriorTurn: (warriorAttack) => {
        const damageDealt = warriorAttack(warrior);
        warrior.damage = damageDealt;
        dragon.healthPoints -= damageDealt;
    },
    mageTurn: (mageAttack) => {
        const mageStatus = mageAttack(mage)
        const damageDealt = mageStatus.damageDealt;
        const manaSpent = mageStatus.manaSpent;
        mage.damage = damageDealt;
        mage.mana -= manaSpent;
        dragon.healthPoints -= mage.damage;
    },
    dragonTurn: (dragonAttack) => {
        const damageDealt = dragonAttack(dragon);
        dragon.damage = damageDealt;
        warrior.healthPoints -= damageDealt;
        mage.healthPoints -= damageDealt;
    },
    turnResults: () => battleMembers,
};


gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults())

// gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);
// gameActions.dragonTurn(dragonAttack);
// console.log(gameActions.turnResults())

// // gameActions.warriorTurn(warriorAttack);
// // gameActions.mageTurn(mageAttack);
// // gameActions.dragonTurn(dragonAttack);
// // console.log(gameActions.turnResults())

// // gameActions.warriorTurn(warriorAttack);
// // gameActions.mageTurn(mageAttack);
// // gameActions.dragonTurn(dragonAttack);
// // console.log(gameActions.turnResults())