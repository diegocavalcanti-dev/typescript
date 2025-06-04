import { Stack } from "./Stack";

const pilha = new Stack<string>();

pilha.push("Prato Verde"); // push adiciona elementos
pilha.push("Prato Azul");
pilha.push("Prato Branco");
pilha.push("Prato Amarelo");
pilha.push("Prato Vermelho");

pilha.printStack(); // printStack exibe os elementos da pilha

pilha.pop(); // pop remove um elemento da pilha

console.log("\nElemento removido da pilha\n")
pilha.printStack(); // printStack exibe os elementos da pilha

pilha.push("Prato Rosa"); // push adiciona elementos

console.log("\nNovo elemento adicionado na pilha");

pilha.printStack(); // printStack exibe os elementos da pilha

console.log("\nElemento no topo da pilha é " + pilha.peek()); // peek checa o elemento adicionado no topo da pilha
console.log("\nElemento Prato Rosa existe na pilha é " + pilha.contains("Prato Rosa")); // contains checa se algum elemento existe na pilha
console.log("\nO numero de elementos na pilha é: " + pilha.count()); // count checa o tamanho da pilha
