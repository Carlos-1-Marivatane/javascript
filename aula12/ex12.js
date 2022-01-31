var idade = 89
console.log(`Voce tem ${idade}`)
if(idade < 16){
    console.log("Nao Vota!")
} else  if(idade < 18 || idade >= 68 ) {
      console.log("Voto Opcional!")
} else if(idade >= 18){
    console.log("Voto Obrigatorio!")
}