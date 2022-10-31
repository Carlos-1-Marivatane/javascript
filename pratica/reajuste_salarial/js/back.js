function calcular(){
    var salari = document.querySelector('input#salario').value
    var res = document.querySelector('div#res')

    if(salari.length == ''){
        res.innerHTML = '[ERRO] POR FAVOR, VERIFIQUE OS DADOS E TENTE NOVAMENTE!'
        res.style.color='WHITE'
        res.style.fontVariant='small-caps'
        res.style.paddingTop = '10px'
    }else{
        var salar = Number(salari)
        if(salar <=280){
            var percentagem = (salar*20)/100
            var reajuste = percentagem + salar
            res.innerHTML = `Salário antes do reajuste: <strong>${salar} MT</strong> <br>`
            res.innerHTML += `Percentual de aumento aplicado: <strong> 20%</strong> <br>`
            res.innerHTML += `Valor do aumento: <strong>${percentagem}</strong>`
            res.innerHTML += `Novo Salário, após o aumento: <strong>${reajuste} MT</strong>`
            res.style.paddingTop = '10px'
            res.style.color='#1b0707'
            res.style.fontSize='18px'

            //20%
        }else if(salar <700){
            //15%
            var percentagem = (salar*15)/100
            var reajuste = percentagem + salar
            res.innerHTML = `Salário antes do reajuste: <strong>${salar} MT</strong> <br>`
            res.innerHTML += `Percentual de aumento aplicado: <strong> 15%</strong> <br>`
            res.innerHTML += `Valor do aumento: <strong>${percentagem}</strong><br>`
            res.innerHTML += `Novo Salário, após o aumento: <strong>${reajuste} MT</strong>`
            res.style.paddingTop = '10px'
            res.style.color='#1b0707'
            res.style.fontVariant='SMall-caps'
        }else if(salar <1500){
            //10%
            var percentagem = (salar*10)/100
            var reajuste = percentagem + salar
            res.innerHTML = `Salário antes do reajuste: <strong>${salar} MT</strong> <br>`
            res.innerHTML += `Percentual de aumento aplicado: <strong> 10%</strong> <br>`
            res.innerHTML += `Valor do aumento: <strong>${percentagem}</strong><br>`
            res.innerHTML += `Novo Salário, após o aumento: <strong>${reajuste} MT</strong>`
            res.style.paddingTop = '10px'
            res.style.color='#1b0707'
            res.style.fontSize='18px'
        }else{
            //5%
            var percentagem = (salar*5)/100
            var reajuste = percentagem + salar
            res.innerHTML = `Salário antes do reajuste: <strong>${salar} MT</strong> <br>`
            res.innerHTML += `Percentual de aumento aplicado: <strong> 5%</strong> <br>`
            res.innerHTML += `Valor do aumento: <strong>${percentagem}</strong><br>`
            res.innerHTML += `Novo Salário, após o aumento: <strong>${reajuste} MT</strong>`
            res.style.paddingTop = '10px'
            res.style.color='#1b0707'
            res.style.fontSize='18px'
        }
    }
}