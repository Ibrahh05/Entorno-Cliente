function calcularFecha(){
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1); 
    const finCurso= new Date(2026,5,24);
    let resto=  finCurso-hoy;
    let dias=Math.floor((resto / 86400000));
    
    document.getElementById("fecha").innerHTML= dias;
}