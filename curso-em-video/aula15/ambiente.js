let num = [5, 8, 2, 9, 3]
num.push(1)  // adiciona 1 no final 
num.sort()   // organiza em ordem crescente
console.log(num) // mostra o vetor
console.log(`O vetor tem ${num.length} posições`)  // tamanho do arrey
console.log(num[0])  // mostra valor na posição 
let pos = num.indexOf(8) // mostra a posição do valor
if ( pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}
