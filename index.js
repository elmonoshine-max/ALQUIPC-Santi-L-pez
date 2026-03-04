function facturar() {
    
    let nombre = document.getElementById("nombre").value.trim();
    let equipos = Number(document.getElementById("equipos").value);
    let dias = Number(document.getElementById("dias").value);
    let extra = Number(document.getElementById("extra").value);
    let tipo = document.getElementById("tipo").value;

    let precio = 35000;

    
    let letras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

    if (!letras.test(nombre)) {
        alert("Solo se permiten letras en el nombre");
        return;
    }

    
    if (equipos < 2) {
        alert("Mínimo 2 equipos");
        return;
    }

   
    let id = Math.floor(Math.random() * 1000);

    
    let total = equipos * dias * precio;

    let mensajeTipo = "";

    
    if (tipo == "fuera") {
        total = total + total * 0.05;
        mensajeTipo = "Incremento del 5% por servicio a domicilio";
    }

    if (tipo == "local") {
        total = total - total * 0.05;
        mensajeTipo = "Descuento del 5% por alquiler en el establecimiento";
    }

    if (tipo == "ciudad") {
        mensajeTipo = "Sin incremento ni descuento";
    }

    
    let totalExtra = equipos * extra * precio;

    let descuentoExtra = extra * 0.02;

    if (descuentoExtra > 0.20) {
        descuentoExtra = 0.20; 
    }

    totalExtra = totalExtra - totalExtra * descuentoExtra;

    total = total + totalExtra;

    
    document.getElementById("resultado").innerHTML =
        "Cliente: " + nombre + "<br>" +
        "ID: " + id + "<br>" +
        "Tipo de alquiler: " + tipo + "<br>" +
        mensajeTipo + "<br>" +
        "Equipos: " + equipos + "<br>" +
        "Días iniciales: " + dias + "<br>" +
        "Días adicionales: " + extra + "<br>" +
        "Total a pagar: $" + total;
}




    



