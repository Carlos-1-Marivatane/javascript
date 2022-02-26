function verificar(){
   var data = new Date()
   var ano =data.getFullYear()
   var fano = window.document.getElementById("txtano")
   var res = document.getElementById("res")
   if(fano.value.length == 0 || Number(fano.value > ano)){
       window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else{
       var fsex = window.document.getElementsByName("sex")
       var idade = ano - Number(fano.value) 
       var genero =""
       var img = document.createElement("img")
       img.setAttribute("Id", "foto")
      if(fsex[0].checked){
          genero = "Homem"
          if(idade >= 0 && idade < 10){
              img.setAttribute("src", "foto.bebe-m.jpg")
          } else if(idade < 21 ){
            img.setAttribute("src", "jovem19.jpg")
          }else if(idade < 50 ){
            img.setAttribute("src", "homem45.jpg")
          }
           else {
              //ssss
              img.setAttribute("src", "idoso.jpg")
          }
      } else if(fsex[1].checked) {
          genero = "Mulher"
          if(idade >= 0 && idade < 10){
            img.setAttribute("src", "criancaf.jpg")
        } else if(idade < 21 ){
            img.setAttribute("src", "menina.jpg")
        } else if(idade < 50 ){
            img.setAttribute("src", "mulher45.jpg")
        }
            else {
            //ssss
            img.setAttribute("src", "idosa.jpg")
        }
      }
      res.style.textAlign="center"
      res.innerHTML=`Detectamos ${genero} com ${idade} anos`
      res.appendChild(img)
   }
}
   