function calcular(){
    let nome = window.document.querySelector("input#nome").value
    let numero1 = window.document.querySelector("input#numero1").value
    let numero2 = window.document.querySelector("input#numero2").value
    let apelido = window.document.querySelector("input#apelido").value

    let res = window.document.querySelector("div#res")

   if(nome.length == "" || numero1.length == "" || numero2.length=="" || apelido.length=="" ){
        res.innerHTML="[ERRO!], Verifique os dados"
        res.style.color="red"
        res.style.textAlign="center"
        res.style.fontSize="19px"
   }
   else{
       let numer1 = Number(numero1)
       let numer2 = Number(numero2)

       let media = (numer1 + numer2) / 2

       if(media < 3){
        res.innerHTML=`<h1>Analisando a Situação de ${nome.toUpperCase()} ${apelido.toUpperCase()}</h1>`
        res.innerHTML+=`<p>Com as notas ${numer1} e ${numer2} a <strong>Média é ${media}</strong></p> `
        res.innerHTML+=`Com Média abaixo de 3, o aluno está Reprovado `
        res.style.color="#283435"
        
       } else{
           if(media > 3 && media <7){
            res.innerHTML=`<h1>Analisando a Situação de ${nome.toUpperCase()} ${apelido.toUpperCase()}</h1>`
            res.innerHTML+=`<p>Com as notas ${numer1} e ${numer2} a <strong>Média é ${media}</strong></p> `
            res.innerHTML+=`Com Média entre 3 e 6, o aluno está em Recuperação  `
            res.style.color="#283435"
           }
           else if(media > 6){
            res.innerHTML=`<h1>Analisando a Situação de ${nome} ${apelido.toUpperCase()}</h1>`
            res.innerHTML+=`<p>Com as notas ${numer1} e ${numer2} a <strong>Média é ${media}</strong></p> `
            res.innerHTML+=`Com Média acima de 6, o aluno está Aprovado `
            res.style.color="#283435"   
           }
       }
   }
}