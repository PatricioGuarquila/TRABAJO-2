
//ejercicio 1

function convertirGradosCentigradosAGradosFahrenheint(){
    var gradocelcius = document.getElementById('celsius').value;
    var gradofahrenheit = (gradocelcius*9/5) + 32;
    document.getElementById('fah'). innerText = `${gradocelcius} c = ${gradofahrenheit} F`;
    document.getElementById('res');
    if (gradofahrenheit >= 212){
                     resultado= "<li> Punto de ebullición del agua </li>";
                     console.log("mayor o igual a 212", gradocelcius, "conversion" ,gradofahrenheit,"igual a", resultado);
                    

          } else if (gradofahrenheit >= 98.6 && gradofahrenheit< 212){
                     resultado = "<li> Temperatura del cuerpo humano </li>"; 
                     console.log("mayor a 98 y menor a 212", gradocelcius,"conversion" ,gradofahrenheit,"igual a", resultado);
                     

          } else if (gradofahrenheit >= 77 && gradofahrenheit<= 98.6){
                     resultado= "<li> Temperatura ambiente </li>";
                     console.log("mayor o igual a 77 y menor a 98.6",gradocelcius,"conversion" ,gradofahrenheit,"igual a", resultado);
                      

          } else if (gradofahrenheit >= 32 && gradofahrenheit<= 77){ 
                     resultado= "<li> Punto de congelación del agua </li>";
                     console.log("mayor o igual a 32 y menor a 77 ", gradocelcius,"conversion", gradofahrenheit,"igual a", resultado);
                    

          } else if (gradofahrenheit >= -459.58 && gradofahrenheit <= 32) {
                     resultado = "<li> Cero absoluto” </li>"; 
                     console.log("mayor o igual a -459.58 y menor a 32 ", gradocelcius, "conversion", gradofahrenheit,"igual a", resultado);
                      
    }

       



//ejercicio 2
    }
    
    function calcularPorcentajes(){
    var numero = document.getElementById('numero').value;
    var resultado = 0
    if(numero < 500){
        resultado = numero * 0.5 ;
    } else {
        resultado = numero * 0.07 ;
    }

    document.getElementById("resultado").innerHTML = "<ol> Resultado: " + resultado + "</ol>";
   



//ejercicio 3
    function crearTabla() {
        let filas = parseInt(prompt('Digite el número de filas para la tabla:'));
        let columnas = parseInt(prompt('Digite el número de columnas para la tabla:'));

        for (let i = 0; i < filas; i++) {
            let filaActual = document.getElementById('tblDatos').insertRow(i);
            
            for (let j = 0; j < columnas; j++) {
                let celda = filaActual.insertCell(j);

                celda.innerHTML = `Fila: ${i} - Columna: ${j}`;
                
            }
        }
    }
}