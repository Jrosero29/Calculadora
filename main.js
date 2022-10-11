
let numero=parseInt(prompt("Ingrese numero"))
let operacion = prompt ("Ingrese operacion")
let number = parseInt(prompt ("Ingrese su otro numero"))

 all (operacion,numero, number)
 function all (){
    switch(operacion){
        case "+" :
            let suma = number + numero
             alert(suma)
             break;
             case "-" :
                let resta = number - numero
             alert(resta)
             break;
             case "*" :
                let multiplicacion = number * numero
             alert(multiplicacion)
             break;
             case "/" :
                let division = number / numero
             alert(division)
             break;
    }


/* const txtop1 = document.getElementById ("op1")
 const txtOperacion = document.getElementById ("operacion")
 const txtop2 = document.getElementById ("op2")
 const btncalcular = document.getElementById ("calcular")
 const pResultado = documen.getElementById("resultado")
 btncalcular.addEventListener("click", calcular)

 function calcular (){
  const operacion = txtOperacion.Value
  const op1 = parseInt (txtop1.Value)
  const op2 = parseInt (txtop2.Value)
  let resultado;
  switch(operacion){
     case "+":
       resultado = op1+op2
       break;
       case "-":
       resultado = op1-op2
       break;
       case "*":
       resultado = op1*op2
       break;
       case "/":
       resultado = op1/op2
       break;
  }*/

  
  if(operador == "+" || operador == "-" || operador== "*" || operador== "/" ){
    pResultado.innerText("= " + resultado)
  }else{
    pResultado.innerText("Calculo imposible")
  }

 }

