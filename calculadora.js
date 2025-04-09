function insert(num){
    
    var resultado = document.getElementById('resultado');
    var textoAtual = resultado.innerHTML;
    if (textoAtual.length < 18) {
        resultado.innerHTML = textoAtual + num;
    }
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calculo(){
    var resultado = document.getElementById('resultado').innerHTML;

    try{
        var final_resultado = eval(resultado);
        document.getElementById('resultado').innerHTML = final_resultado;
    }catch{
        document.getElementById('resultado').innerHTML = ("Syntax ERROR")
    }

    }
