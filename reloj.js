const mostrarReloj = ()=> {
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;

    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
    const diaSemana = dias[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
    document.getElementById('contenedor').classList.toggle('animar'); //aplica el estilo en forma de intervalo, debido a setInterval cada 1seg
}
// funcion para agregar 0 adelante, cuando se tenga un solo digito
const formatoHora = (hora)=> {
    if(hora < 10)
        hora = '0' + hora;
    return hora;
    
}
setInterval(mostrarReloj, 1000); // permite ejecutar codigo cierta cantidad de tiempo

