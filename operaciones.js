function f_operar(){
    var n1 =parseFloat(document.getElementById("num1").value);
    var n2 =parseFloat(document.getElementById("num2").value);
    var signo = document.getElementById("operador").value;

    switch(signo){
        case "+":  var suma = n1 + n2;
                   document.getElementById("resultado").value =suma;
                   break;
        case "-":  var resta = n1 - n2;
                   document.getElementById("resultado").value =resta;
                   break;
        case "*":  var multiplicar = n1 * n2;
                   document.getElementById("resultado").value =multiplicar;
                   break;
        case "/":  var dividir = n1 / n2;
                   document.getElementById("resultado").value =dividir;
                   break;           
    }

}