function inverterString(str) {
  return str.split('').reverse().join('');
}

// Exemplo de uso:
let textoOriginal = "Copilot é incrível!";
let textoInvertido = inverterString(textoOriginal);
console.log(textoInvertido); 

// Retorna:  "!levícni é tolipoC"


/*   - split(''): divide a string em um array de caracteres.
     - reverse(): inverte a ordem dos elementos no array.
     - join(''): junta os caracteres novamente em uma string.
 */