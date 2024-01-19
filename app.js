let numeroSecreto = Math.floor(Math.random()*10) + 1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = 'vez';
let maximosIntentos = 3;

while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor")); // Despliega un cuadro preguntado y lee la escrito, paseInt convierte el numero a numeros
    console.log(numeroUsuario); // Imprimir mensajes 

    if(numeroUsuario == numeroSecreto){
        alert(`Acertaste, el numero es:  ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? 'Vez': 'Veces'}`); // aparece una alerta, para imprimir una variable con comillas invertidas y %{variable}
    } else{
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        } else {
            alert('El numero es mayor');
        }

        intentos ++;
        palabraVeces = 'veces';
        if(intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos, el numero era ${numeroSecreto}`);
            break; // Forzamos la salida del bucle 
        }
    }
}

