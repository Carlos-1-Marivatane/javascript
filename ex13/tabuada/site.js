function gerar(){
    let numero = window.document.querySelector("input#numero").value
    let tabuada = window.document.querySelector("select#tabuada")

    if(numero.length == 0){
        alert("Por favor, digite um numero")
    }else{
        let numer = Number(numero)
        let c =1
        tabuada.innerHTML=""
        while(c<=12){
            let item = document.createElement('option')
            item.text = `${numer} x ${c} = ${numer*c}`
            item.value= `tabuada ${c}`
            tabuada.appendChild(item)
            c++
        }
    }
    

}