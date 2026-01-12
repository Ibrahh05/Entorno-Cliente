function domingos(){

    const dia = parseInt(prompt("Introduce el día de tu cumpleaños:"));
    const mes = parseInt(prompt("Introduce el mes de tu cumpleaños:")-1);
    
    const añoActual = new Date().getFullYear();
    const añoFin = 2100;
    
    let añosConDomingo = [];

    for (let año = añoActual; año <= añoFin; año++) {
        const fechaCumple = new Date(año, mes, dia);
        
   
        if (fechaCumple.getDate() === dia && fechaCumple.getMonth() === mes) {
            if (fechaCumple.getDay() === 0) { 
                añosConDomingo.push(año);
            }
        }
    }
    document.getElementById("domingo").innerHTML=añosConDomingo;
}