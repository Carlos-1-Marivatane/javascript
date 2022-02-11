function contar(){
    let inic =  window.document.querySelector("input#inicio").value
    let fm =  window.document.querySelector("input#fim").value
    let paso = window.document.querySelector("input#passo").value
    let res = window.document.querySelector("div#res")
   
    if(inic.length == 0 || fm.length == 0 || paso.length == 0 ){
      res.innerHTML = `Impossivel Contar`
    } else{
        res.innerHTML = `Contando: <br> `
        let ini = Number(inic)
        let fin = Number(fm)
        let passso = Number(paso)
        if(passso <= 0){
           res.innerHTML = `Passo invalido. <br> Considerando passo 1: <br>`
           res.style.color = "black"
            passso = 1
           
        }
        if(ini < fin){
            for (c = 1; c <= fin; c += passso ){
                res.innerHTML += ` ${c} `
            }
        }else{
            for(let c =1; c >= fin; c-= passso){
                res.innerHTML += `${c}`
            }
        }
       
       
    }
}