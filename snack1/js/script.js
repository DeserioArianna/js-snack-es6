const biciclette = [
    {nome: "bicicletta1", peso: 6},
    {nome: "bicicletta2", peso: 9},
    {nome: "bicicletta3", peso: 15},
    {nome: "bicicletta4", peso: 18},
    {nome: "bicicletta5", peso: 25},
    {nome: "bicicletta6", peso: 11},
    {nome: "bicicletta7", peso: 8},
];

let biciConPesoMinore = biciclette[0];
for (let i = 0; i < biciclette.length; i++) {
    const curBicicletta = biciclette[i];
    if (curBicicletta.peso < biciConPesoMinore.peso) {
        biciConPesoMinore = curBicicletta;
    }
}

console.log(`La bicicletta con minor peso è: ${biciConPesoMinore.nome} e il suo peso è: ${biciConPesoMinore.peso}`)