let texto = document.getElementById('txt')
let result = document.getElementById('res')

function invertePalavras() {
     if (texto.value.length == 0) {
        window.alert('Digite uma palavra para inverter!')
     } else {
        let resultado = ""
        for (let i = texto.value.length -1; i >= 0; i--) {
            resultado += texto.value[i]
        }
        result.innerHTML = resultado
     }
}

/*

function inverterString(str) {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}


 Exemplo:

let original = "Olá, JavaScript!";
let invertido = inverterString(original);
console.log(invertido); 

Retorna :  "!tpircSavaJ ,álO" 

*/
