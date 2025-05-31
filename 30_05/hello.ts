// import leia from 'readline-sync'

// // console.log("Hello");

// // let idade: number
// // idade = 18

// // let bola = leia.questionInt("Qual o seu nome? ")

// // console.log(idade);

// // let lista: number[] = []
// // lista[0] = 12
// // lista[1] = 15

// // let diaNascimento: any
// // // null|number|undefined|string|boolean
// // diaNascimento = 10
// // diaNascimento = false

// // const lista: Array<string> = new Array<string>()
// // // const lista2: Array<string> = new Array<number>()

// // console.log(lista)
// // lista.push("Thiago", "Lud")
// // console.log(lista);
// // lista.unshift("Matheus", "Giulia", "Miguel")
// // console.log(lista);

// // for(let contador = 0; contador < lista.length; contador++){
// //     console.log(`Oi ${lista[contador]}, tudo bem?`);
// // }

// // console.log('------------------------------')
// // for(let nome of lista){
// //     console.log(`Oi, ${nome}, tudo bem?`);
// // }

// const lista: Set<string> = new Set<string>()

// lista.add("Douglas")
// console.log(lista);
// lista.add("Giulia")
// console.log(lista);
// lista.add('Diego')
// console.log(lista);
// lista.add('Felipe')
// console.log(lista);
// lista.add('Bruna')
// console.log(lista);
// lista.delete('Douglas')
// console.log(lista);

interface queueInterface<Type> {
   enqueue(dataItem: Type): void;
   dequeue(): Type | undefined;
   isEmpty(): boolean;
   count(): number;
   printQueue(): void;
   peek(): Type | undefined;
   contains(dataItem: Type): boolean;
   clear(): void;
}

export class Queue<Type> implements queueInterface<Type> {
   enqueue(dataItem: Type): void {
      throw new Error("Method not implemented.");
   }
   dequeue(): Type | undefined {
      throw new Error("Method not implemented.");
   }
   isEmpty(): boolean {
      throw new Error("Method not implemented.");
   }
   count(): number {
      throw new Error("Method not implemented.");
   }
   printQueue(): void {
      throw new Error("Method not implemented.");
   }
   peek(): Type | undefined {
      throw new Error("Method not implemented.");
   }
   contains(dataItem: Type): boolean {
      throw new Error("Method not implemented.");
   }
   clear(): void {
      throw new Error("Method not implemented.");
   }
    
}