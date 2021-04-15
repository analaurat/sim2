//Funciones

function crearId() {
  return parseInt(Math.random() * 5000)
}

function calcularFechaHasta(fechaInicio, dias) {
  let fechaFinal = new Date();

  fechaFinal.setDate(fechaInicio.getDate() + dias);
  return (fechaFinal)
}

function pedirTipoServicio() {
  let opcion, servicio;

  opcion = prompt("🏦 Bienvenido! \nPara que tipo de servicio quiere un turno?\n [1] Caja      [̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]\n [2] Ejecutivo de cuentas (Tarjetas, Seguros)\n [3] Acceso a Caja Fuerte");

  if (opcion == 3) {
    servicio = "Caja Fuerte"
  } else if (opcion == 2) {
    servicio = "Ejecutivo"
  } else if (opcion == 1) {
    servicio = "Caja"
  } else {
    servicio = 0
  }
  return servicio
}

function preparamsgTurnosDisponibles(turnos) {
  let dia, hora, mins, fecha = 0;

  let dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  let msg = "|------------ Turnos Disponibles para: " + (turnos[0].tipo).toLocaleUpperCase() + " ------------|\nElige uno\n";

  for (let i = 0; i < turnos.length; i++) {

    dia = dias[turnos[i].fecha.getDay()];
    fecha = turnos[i].fecha.getDate();
    hora = turnos[i].fecha.getHours();
    mins = turnos[i].fecha.getMinutes() == 0 ? "00" : turnos[i].fecha.getMinutes();

    msg = msg + "[" + i + "] -> Dia: " + dia + " " + fecha + " Horario: " + hora + ":" + mins + (hora > 12 ? " pm \n" : " am \n");
  }
  return (msg)
}



function turnosDisponibles(turnos, servicio) {
  let nuevoArrayTurnos = [];

  for (let turno in turnos) {
    if (turnos[turno].tipo == servicio && turnos[turno].disponible) {
      //si encuentro un turno disponible, lo agrego al nuevo array
      nuevoArrayTurnos.push(turnos[turno]);
    }
  }

  return nuevoArrayTurnos
}

function validarTurnoElegido(opcionElegida, turnos) {

  let tipo = turnos[opcionElegida].tipo;
  let dia = turnos[opcionElegida].fecha


  if (confirm("Ud ha seleccionado Turno para: " + tipo + "\nEl dia: " + dia)) {
    return true
  } else
    return false;

}

function pedirDatos() {
  let usuario = [];
  usuario[0] = prompt("Ingrese apellido");
  usuario[1] = prompt("Ingrese DNI");
  return usuario;
}


function reservarTurno(id, turnos, datosUsuario) {
  console.log("Reservar Usuario: " + datosUsuario[0] + " DNI: " + datosUsuario[1]);
  console.log("Reservar Turno ID: ", id);

  for (let turno in turnos) {
    if (turnos[turno].id == id) {
      turnos[turno].apellidoCliente = datosUsuario[0];
      turnos[turno].dni = datosUsuario[1];
      turnos[turno].disponible = false;
      alert("Turno Reservado Exitosamente\n");
      console.log("Turno Reservado Exitosamente");
    }
  }
}