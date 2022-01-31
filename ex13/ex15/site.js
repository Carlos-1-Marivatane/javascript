function verificar(){
    var data = new Date()
    var agora = data.getFullYear()
    var fano = window.document.querySelector("input#txtano")
    var res = window.document.querySelector("div#res")
    if (fano.value.length == 0 || fano.value > agora){
        window.alert("[ERRO] Verifique os dados e tente novamente!")

    } else{
        var fsex = document.getElementsByName("sex")
        var idade = agora - Number(fano.value)
        var genero =""
        var img=document.createElement("img")
        img.setAttribute("Id", "foto")
        if(fsex[0].checked){
             genero = "Homem"
             if(idade >= 5 && idade < 5){
                 //bebe
                 img.setAttribute("src","foto.bebe2.jpg")
             } else if(idade > 5 && idade <= 10){
                 //crianca
                 img.setAttribute("src","foto.criancap.jpg")
             } else if(idade > 10 && idade < 21){
                 //jovem
                 img.setAttribute("src","foto.jovem19.jpg")
             }else if(idade < 50){
                 //adulto
                 img.setAttribute("src","foto.homem45.jpg")
             } else{
                img.setAttribute("src","foto.idoso.jpg")
             }
        }else if(fsex[1].checked){
            genero= "Mulher"
            if(idade >= 5 && idade < 5){
                //bebe
                img.setAttribute("src","foto.bebe1.jpg")
            } else if(idade > 5 && idade <= 10){
                //crianca
                img.setAttribute("src","foto.crianca10.jpg")
            } else if(idade > 10 && idade < 21){
                //jovem
                img.setAttribute("src","foto.negra.jpg")
            }else if(idade < 50){
                //adulto
                img.setAttribute("src","foto.mulher45.jpg")
            } else{
                img.setAttribute("src","foto.idosa.jpg")
            }
        }
        res.style.textAlign="center"
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}