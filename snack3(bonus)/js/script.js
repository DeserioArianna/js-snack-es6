const number = [3, 7];
const fusion = [];
const arrayPrincipal = [1, 3, 5, 7, 11, 13, 17, 19];

for (let i = number[0]; i < number[1]; i++) {
    const curNum = arrayPrincipal[i];
    fusion.push(curNum);
}

console.log("Array originale:" ,arrayPrincipal);
console.log("Array con valori tra gli indici 3 e 7:", fusion);