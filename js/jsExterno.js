function boton1(){
    //prompt ingresar datos
    var num= prompt("ingresa un número");
    //funcion con if
    var resultado = par(num);
    //resulado en alerta
    alert("Ingresaste "+num+", es un número "+resultado);
    //Funcion que determina si es par o impar, se le pasa el parametro de num
    function par(num) {
        if(num % 2 == 0) {
            return "par";
        }
        else {
            return "impar";
        }
    }
}

function boton3(){
    //se trae el id de los imput para convertirlos en variable en js.
    var input1 = Number(document.getElementById("dato").value);
    var input2 = Number(document.getElementById("dato2").value);
    var input3 = Number(document.getElementById("dato3").value);
    //if de comparación
    function datoR(){
    if(input1>=input2 && input1>=input3){
      return input1
  }else if (input2>input1 && input2>input3){
      return input2
  } else{
      return input3
  }
    }
    
    //cambio del h2 con innerHTML
    document.getElementById("datoR").innerHTML = "El número mayor es: " + datoR();
    
    
    
}

//honestamente a esteejercicio le entendí poco
function boton2(){
    function primeNumbers(max){
        //comprendo que se hace un cilco for, comenzando en dos ya que es el primer número primo y se le agrega un numero acumulativo.
        for (let i = 2; i < max; i++) {
            if (isPrime(i)) {
                primes.push(i)
            }
            else{
                noPrimes.push(i)
            }
        }
    }

    function isPrime(n){
        for(let i = 2; i < n; i++){
            if(n % i === 0){
               return false;
            }
        }
        return true;
    }
    var primes = [];
    var noPrimes = [];

    //aqui comprendo que es el limite de numeros primos.
    primeNumbers(50);
    alert("Los números primos entre 1 y 50 son: " + primes);
}

