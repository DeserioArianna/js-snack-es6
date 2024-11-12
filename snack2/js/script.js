const serieA = [
    {nome: "Milan", puntiFatti: 0, puntiSubiti: 0},
    {nome: "Atalanta", puntiFatti: 0, puntiSubiti: 0},
    {nome: "Verona", puntiFatti: 0, puntiSubiti: 0},
    {nome: "Venezia", puntiFatti: 0, puntiSubiti: 0},
    {nome: "Sampdoria", puntiFatti: 0, puntiSubiti: 0},
    {nome: "Palermo", puntiFatti: 0, puntiSubiti: 0},
    {nome: "Roma", puntiFatti: 0, puntiSubiti: 0},
    {nome: "Inter", puntiFatti: 0, puntiSubiti: 0},
    {nome: "Juventus", puntiFatti: 0, puntiSubiti: 0},
    {nome: "Lecce", puntiFatti: 0, puntiSubiti: 0},
]

const punti = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1))+ min;
}

for (let i = 0; i < serieA.length; i++) {
    const curSerie = serieA[i];
    curSerie.puntiFatti = punti(0, 100);
    curSerie.puntiSubiti = punti(0, 50);
    // console.log(curSerie.puntiFatti, curSerie.puntiSubiti)
}

const squadreFalli = [];
for (let i = 0; i < serieA.length; i++) {
    const squadra = serieA[i];
    squadreFalli.push({nome: squadra.nome, puntiSubiti: squadra.puntiSubiti});
}

console.log("Array originale di serie A:", serieA)
console.log("Array modificato di serie A con falli subiti:", squadreFalli);