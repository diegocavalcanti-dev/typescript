// ordenar alfabetico e mostrar #### to do

import leia from 'readline-sync'

const lista: Array<string> = new Array<string>()

for(let contador = 0; contador < 5; contador++){
    lista.push(leia.question("Digite uma cor: "))
}

console.log(`\nListar todas as cores:`);

for(let cor of lista) {
    console.log(cor);
}

console.log("\nOrdenar as Cores: ");

for(let cor of lista.sort()) {
    console.log(cor);
}