// RELOJ

setInterval(()=>{

    let fecha=new Date();
    
    document.getElementById("reloj").innerHTML=
    
    fecha.toLocaleString();
    
    },1000);
    
    
    // FACTURAR
    
    function facturar(){
    
    let cliente=document.getElementById("cliente").value;
    
    if(cliente=="")
    cliente="ALQ-"+Math.floor(Math.random()*10000);
    
    let equipos=parseInt(document.getElementById("equipos").value);
    
    let dias=parseInt(document.getElementById("dias").value);
    
    let extra=parseInt(document.getElementById("extra").value)||0;
    
    let tipo=document.getElementById("tipo").value;
    
    if(equipos<2){
    
    alert("Mínimo 2 equipos");
    
    return;
    
    }
    
    let precio=35000;
    
    let base=equipos*dias*precio;
    
    let recargo=0;
    
    if(tipo=="fuera")
    recargo=base*0.05;
    
    let descuentoLocal=0;
    
    if(tipo=="local")
    descuentoLocal=base*0.05;
    
    let subtotal=base+recargo-descuentoLocal;
    
    let descuentoExtra=0;
    
    if(extra>0){
    
    let porcentaje=extra*2;
    
    if(porcentaje>10)
    porcentaje=10;
    
    descuentoExtra=subtotal*porcentaje/100;
    
    }
    
    let total=subtotal-descuentoExtra;
    
    
    document.getElementById("resultado").innerHTML=
    
    `
    Cliente: ${cliente}<br>
    
    Valor base: $${base.toLocaleString()}<br>
    
    Recargo: $${recargo.toLocaleString()}<br>
    
    Descuento: $${descuentoLocal.toLocaleString()}<br>
    
    Extra: $${descuentoExtra.toLocaleString()}<br>
    
    <h2>Total: $${total.toLocaleString()}</h2>
    
    `;
    
    }
    
    
    // NUEVA FACTURA
    
    function nuevaFactura(){
    
    document.getElementById("cliente").value="";
    document.getElementById("equipos").value="";
    document.getElementById("dias").value="";
    document.getElementById("extra").value="";
    document.getElementById("resultado").innerHTML="";
    
    }
    
    
    // AYUDA
    
    function ayuda(){
    
    alert("Sistema de facturación ALQUIPC\n\nIngresa los datos y presiona FACTURAR");
    
    }