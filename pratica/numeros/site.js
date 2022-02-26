let num = document.querySelector("input#fnum").value
let lista =window.document.querySelector("select#flista")
let res =   window.document.querySelector("div#res")
let valores = []

function IsNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function Isnlista(n,l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function adicionar(){

    if(IsNumero(num) && Isnlista(num, valores)){
     valores.push(Number(num))
     let item = document.createElement('option')
     item.text = `O valor ${num} Adicionado`
     lista.appendChild(item)

    }else{
        alert("Encontrado")
    }
   
}