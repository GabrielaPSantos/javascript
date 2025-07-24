function aparecePrompt() {
    // prompt()  / teste antes de escrever os códigos
   let area = prompt('Escolha a opção: 1- se você deseja seguir para área front-end ou 2- se deseja seguir em back-end')
   console.log(area)

   if(area == '1') {
    let techFront = prompt('Escolha a opção: 1- se você quer aprender React ou 2- se quer aprender Vue')
    console.log(techFront)
   } else if (area == '2') {
    let techBack = prompt('Escolha a opção: 1- se você quer aprender C# ou 2- se você quer aprender Java')
    console.log(techBack)
   } else {
    alert('Você não respondeu uma opção valida')
   }

   let listaTechs = []

   let fullstack = prompt('Você prefere: 1- seguir se especializando na área escolhida ou 2- seguir se desenvolvendo para se tornar full-stack?')

   let aprenderMais = prompt('Tem mais alguma tecnologia que gostaria de aprender? 1- sim ou 2- não')
   while (aprenderMais == 1) { // antes era if mas precisa entrar em loop
    let novaTech = prompt('Me conte qual tecnologia você quer aprender:')
    listaTechs.push(novaTech)
    aprenderMais = prompt(`Que legal que quer estudar ${novaTech}! Agora sua lista de aprenzidado esta assim: ${listaTechs}. Existe mais alguma linguagem que queira aprender? 1- sim ou 2- não`)
   } 
    alert('Bons estudos para você então!')
 }