// Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
// Mostre na tela todos os elementos da Collection Set. 

import leia from 'readline-sync';

const numeros1: Set<number> = new Set<number>();

while (numeros1.size < 10) {
    const valor = leia.questionInt(`Digite o ${numeros1.size + 1}o numero inteiro: `);
    numeros1.add(valor);
}

const ordenarNumeros1 = [...numeros1].sort((a, b) => a - b);

console.log('\nNúmeros digitados de forma ordenada:');
ordenarNumeros1.forEach(numeros1 => console.log(numeros1));



// Segunda parte # to do
console.log('\n-------BORA PRA SEGUNDA PARTE-------');
const numero2: number[] = [];

for (let contador = 0; contador < 10; contador++) {
    const valor = leia.questionInt(`Digite o ${contador + 1}o numero inteiro: `);
    numero2.push(valor);
}

const numeros2 = new Set<number>(numero2);
const ordenadosSemRepetir = [...numeros2].sort((a, b) => a - b);

console.log('\nListar dados do Set:');
ordenadosSemRepetir.forEach(numeros2 => console.log(numeros2));
