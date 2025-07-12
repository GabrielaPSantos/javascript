let valores = []

function adicionar() {
    let num = document.getElementById('txtn')
    let n = Number(num.value)
    let sel = document.getElementById('sel')
    if (num.value.length == 0 || num.value > 100) {
        window.alert('Valor inválido ou ja encontrado na lista!')
    } else {
        let opt = document.createElement('option')
        opt.text = `Valor ${n} adicionado.`
        sel.appendChild(opt)
        valores.push(n)
    }
}


function fim() {
    let par = document.getElementById('par')
    let maior = Math.max(...valores)
    let menor = Math.min(...valores)
    let soma = 0

    for(let i=0; i < valores.length; i++) {
        soma += valores[i]
    }

     let media = soma / valores.length

    par.innerHTML = `Ao todo temos ${valores.length} números cadastrados.`
    par.innerHTML += `<br> O maior valor informado foi ${maior}`
    par.innerHTML += `<br> O menor valor informado foi ${menor} `
    par.innerHTML += `<br> Somando todos os valores, temos ${soma}`
    par.innerHTML += `<br> A média dos valores digitados é ${media}`
}
 
