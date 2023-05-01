function heroInventory(input) {
    let heroes = [];

    for (const line of input) {
        let heroName = line.split(' / ')[0];
        let heroLevel = Number(line.split(' / ')[1]);
        let heroItems = line.split(' / ')[2].split(', ');

        let heroObj = { name: heroName, level: heroLevel, items: heroItems };
        heroes.push(heroObj);
    }

    let sorteredHeroes = heroes
        .sort((heroA, heroB) => heroA.level - heroB.level);

    for (const hero of sorteredHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}

heroInventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
)