//función para aumentar un numero al turno
function sumarTurno() {
  const numeroTurnoElement = document.getElementById('numero-turno');

  if (numeroTurnoElement) {
    // como es un h1 y no un input se usa innerText
    let numeroActual = parseInt(numeroTurnoElement.innerText); 
    // comprobamos que el numeroActual no sea NaN
    if (!isNaN(numeroActual)) {
      const numeroSiguiente = numeroActual + 1;
      numeroTurnoElement.innerText = numeroSiguiente.toString().padStart(2, '0'); // padStart para que siempre tenga dos números en este caso y que si el número introducido no tiene 2 dígitos, se rellenen con 0 a la izquierda.
    }
  }
}

// función para restar un turno
function restarTurno() {
  const numeroTurnoElement = document.getElementById('numero-turno');

  if (numeroTurnoElement) {
    // como es un h1 y no un input se usa innerText
    let numeroActual = parseInt(numeroTurnoElement.innerText); 
    // comprobamos que el numeroActual no sea NaN
    if (!isNaN(numeroActual)) {
      const numeroSiguiente = numeroActual - 1;
      numeroTurnoElement.innerText = numeroSiguiente.toString().padStart(2, '0');
    }
  }
}

// función para restar un turno
function resetearTurnos() {
  const numeroTurnoElement = document.getElementById('numero-turno');

  if (numeroTurnoElement) {
    // como es un h1 y no un input se usa innerText
    let numeroActual = parseInt(numeroTurnoElement.innerText); 
    // comprobamos que el numeroActual no sea NaN
    if (!isNaN(numeroActual)) {
      const numeroSiguiente = 0;
      numeroTurnoElement.innerText = numeroSiguiente.toString().padStart(2, '0');
    }
  }
}

//evento para el boton "siguiente turno"
const sumarBoton = document.getElementById('siguiente');
if (sumarBoton) {
  sumarBoton.addEventListener('click', sumarTurno);
}

//evento para el boton "turno anterior"
const restarBoton = document.getElementById('atras');
if (restarBoton) {
  restarBoton.addEventListener('click', restarTurno);
}

//evento para resetear el contador
const resetearContadorBoton = document.getElementById('reset');
if (resetearContadorBoton) {
  resetearContadorBoton.addEventListener('click', resetearTurnos);
}


// función para establecer un turno a partir de un input introducido: 

function actualizarTurno() {
//obtener el nuevo valor del turno, como es un input usamos value y tiene que ser de HTMLinputelement
  const numeroIntroducido = document.getElementById('contador-texto') as HTMLInputElement;
  const numeroSiguiente = numeroIntroducido.value; // no es necesario hacer un parse porque aquí ya se trabaja con Strings, al igual que al aplicar el nuevo valor.

  // aplicar el nuevo valor
  const elementoH1 = document.getElementById('numero-turno');
  elementoH1!.innerText = numeroSiguiente.padStart(2, '0');
}
//crear el evento al pulsar el botón de enviar
const enviarBoton = document.getElementById('actualizar-turno');
enviarBoton!.addEventListener('click', actualizarTurno);