var hora = new Date()
var agora = hora.getHours()
console.log(`Agora são ${hora} horas`)
if(hora < 12){
    console.log("Bom dia!")
} else if(hora >= 12 && hora < 18){
    console.log("Boa tarde!")
}  
else {
    console.log("Boa Noite!")
} 