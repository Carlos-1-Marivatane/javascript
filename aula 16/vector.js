
let valores = [8,3,21,56,232]
for(let c in valores){
    console.log(`A posicao ${c} tem o valor ${valores[c]}`)
}
/*
for(let c=0; c < valores.length; c++){
    console.log(`A posicao ${c} tem o valor ${valores[c]}`)
}*/
let po = valores.indexOf(21)
console.log(`O valor esta na posicao ${po}`)
if(po== -1){
    console.log("O Valor nao foi encontrado")
}else{
    console.log("O valor ja existe!")
}