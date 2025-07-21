let num = document.getElementById('txtn')
let res = document.getElementById('res')
let parag = document.getElementById('paragra')

function verificarParOuImpar() {
    
    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        let resultado = num.value % 2
        if (resultado == 0 ) {
            parag.innerHTML = `O número ${num.value} é Par. `
        } else {
            parag.innerHTML = `O número ${num.value} é Impar. `
        }
    }
}

