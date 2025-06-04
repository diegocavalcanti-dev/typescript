


// function bomDia(parametro1: number, parametro2: number, parametro3: number): void {
//     // escopo da função
//     console.log(`Bom dia ${parametro1}`)
//     console.log(`Bom dia ${parametro2}`)
//     console.log(`Bom dia ${parametro3}`)
// } 

// bomDia(1)

// function bomDia(nome: string): void { // void não utilizam return
//     if(nome === "Diego"){
//         console.log("Bom dia " + nome);
//     } else {
//         console.log("Nem vem");
//     }
// }

// bomDia('Diego')
// bomDia("Fernanda")
console.log(bomDia("Diego") + " , bela manhã sem sol");

function bomDia(nome: string): string { // void não utiliza return
    console.log('Bom dia');
    return `Bom dia ${nome}`
}


let valorUnitario = 857.3
let valorTotal = 0
let quantidade = 3
let parcelas = 5
let valorParcela = 0

valorParcela = (valorUnitario * quantidade) / parcelas
console.log(valorParcela)

function calcularValorTotal(valorUnit: number, quant: number): number {
    return valorUnit * quant
}

console.log(calcularValorTotal(valorUnitario, quantidade));

function parcelarValor(valorTotal: number, parcelas: number): number {
    return valorTotal / parcelas
}

valorTotal = calcularValorTotal(valorUnitario, quantidade)

// if (aVista === true){
//     console.log(calcularValorTotal);   
// } else {
//     calcularValorTotal
//     console.log(parcelarValor)
// }

function seila(origem: string, destino: string, paradaMeio?: string ): void { // ? opcional tem que ser sempre o ultimo parametro
    console.log('seila');
}

seila('lalala', 'asdasd', 'asdddddad')
seila('lalalaa', 'asdad', 'asdasd')
seila('bola', 'asdsad', 'asdasd')


