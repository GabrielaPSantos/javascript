function somaArray(num) {
  soma = 0;
  for (let i = 0; i < num.length; i++) {
      soma += num[i];
  }
  return soma;
}

numeros = [1, 2, 4, 5, 10]

console.log(somaArray(numeros))