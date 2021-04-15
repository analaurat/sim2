/* CONSIGNA:
Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
A) Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
B)Armar la estructura HTML del proyecto.
C) Incorporar al menos un prompt para pedir un dato y luego mostrarlo mediante alert realizando alguna operación.
D) Utilizar funciones para realizar esas operaciones.


RESPUESTAS:
A)Alcance del proyecto:
Sistema de reserva de turnos de un Banco.
1] Se le pide al usuario por prompt
      Servicio para el cual quiere un turno: Cajas, Ejecutivo de cuentas, o Caja Fuerte.
2] Se muestran por prompt los turnos disponibles
      (con algun identificador para que el usuario pueda elegir entre alguna de las opciones)
3] Al elegir se reserva ese turno de ese servicio para ese usuario,
      (incluye pedir datos del usuario (Nombre y DNI) para bookear)
4] Se avisa al usuario que el turno fue reservado exitosamente.

B) No tengo idea de HTML, asique todavia no pense como encarar esta parte.

C) Incluyo varios prompts para pedir info al usuario y tambien algun Alert para la confirmacion del turno.

D) Necesito utilizar algo ademas de funciones para que esto funcione (iniciamente), asique voy a usar un array de turnos y voy a usar un array de turnos.

*/

//Variables
let msgTurnosDisponibles = "";
let servicio, dni, opcion = 0;
let dia, mes = 0;
let turnosDisponiblesxServicio = [];
let fechaActual = new Date();
let fechaHasta = new Date();



// =========================== CODIGO =========================== //

console.log("---------- Array de Turnos ESTADO INICIAL -----------");

for (var turno of turnos) {
  console.log("Tipo: " + turno.tipo + "\n" + " Fecha: " + turno.fecha + "\n ID: " + turno.id + "\n Disponible?: " + turno.disponible + "\n DNI : " + turno.dni);
}

console.log("----------  Array de Turnos ESTADO INCIAL ------------");



//1] Se le pide al usuario servicio por prompt
servicio = pedirTipoServicio();
console.log("Servicio Elegido: ", servicio);

//1.1] Preparo un Array que solo tenga turnos disponibles (disponible = true) de ese servicio para mostrar
turnosDisponiblesxServicio = turnosDisponibles(turnos, servicio);

//1.2] Preparo el mensaje para mostrar por prompt con todos los turnos disponibles  de ese tipo de servicio, para que el usuario elija
msgTurnosDisponibles = preparamsgTurnosDisponibles(turnosDisponiblesxServicio);


//2] Se muestran por prompt los turnos disponibles y se pide seleccion de opcion
opcion = prompt(msgTurnosDisponibles);


//3] Al elegir se reserva ese turno de ese servicio para ese usuario
if (validarTurnoElegido(opcion, turnosDisponiblesxServicio)) {
  let datoUsuario = [];

  //3.1] guardo el id del turno elegido
  idTurno = turnosDisponiblesxServicio[opcion].id;

  //3.2]] esto si esta feo, usé un array para traerme varios valores de un funcion, tendria que haber usado un objeto de clase Persona, pero bueno...
  datoUsuario = pedirDatos();

  //3.3] Se reserva el turno en el array de Turnos (para este caso es solo pasar a FALSE la disponibilidad y agregarle el DNI de la persona)
  reservarTurno(idTurno, turnos, datoUsuario);

  //3.4] Este Else solo se accede si el usuario no valida el turno inicialmente, es darle una segunda oportunidad para que elija otro turno.
} else {
  servicio = pedirTipoServicio();
  turnosDisponiblesxServicio = turnosDisponibles(turnos, servicio);
  msgTurnosDisponibles = preparamsgTurnosDisponibles(turnosDisponiblesxServicio);
  opcion = prompt(msgTurnosDisponibles);
}



console.log("---------- Array de Turnos ESTADO FINAL -----------");

for (var turno of turnos) {
  console.log("Tipo: " + turno.tipo + "\n" + " Fecha: " + turno.fecha + "\n ID: " + turno.id + "\n Disponible?: " + turno.disponible + "\n DNI : " + turno.dni);
}

console.log("----------  Array de Turnos ESTADO FINAL ------------");