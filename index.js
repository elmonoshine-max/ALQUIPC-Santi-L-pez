function facturar() {
    
    let nombre = document.getElementById("nombre").value;
    let equipos = Number(document.getElementById("equipos").value);
    let dias = Number(document.getElementById("dias").value);
    let extra = Number(document.getElementById("extra").value);
    let tipo = document.getElementById("tipo").value;

    let precio = 35000;

    if (equipos < 2) {
        alert("Mínimo 2 equipos");
        return;
    }

    let id = Math.floor(Math.random() * 1000);

    let total = equipos * dias * precio;

    if (tipo == "fuera") {
        total = total + total * 0.05;
    }

    if (tipo == "local") {
        total = total - total * 0.05;
    }

    let totalExtra = equipos * extra * precio;
    totalExtra = totalExtra - totalExtra * (extra * 0.02);

    total = total + totalExtra;

    document.getElementById("resultado").innerHTML =
        "Cliente: " + nombre + "<br>" +
        "ID: " + id + "<br>" +
        "Equipos: " + equipos + "<br>" +
        "Días: " + dias + "<br>" +
        "Extras: " + extra + "<br>" +
        "Total: $" + total;
}





