//Lista de paises
let paises=["Andorra","España","Portugal","Marruecos"];

let opcion;
do{

    opcion=prompt("Menú: \n1.Mostrar numero de paises\n2.Mostrar listado de paises\n3.Mostrar un intervalo de países\n4.Añadir un país\n5.Borrar un país\n6.Consultar un país\n7.Salir");

    if(opcion==1){
        document.getElementById("numeroPaises").innerHTML=paises.length;
    }else if(opcion==2){
        opcion=prompt("Menú: \n1.Mostrar listado sin modificar\n2.Mostrar listado al revés\n3.Mostrar listado ordenado alfabeticamente");
        if(opcion==1){
        document.getElementById("listado").innerHTML=paises;
        }else if(opcion==2){
            document.getElementById("listado").innerHTML=paises.reverse();
        }else if(opcion==3){
            document.getElementById("listado").innerHTML=paises.sort();
        }else {
            console.log("Opcion no válida");
        }

    }else if(opcion==3){
        let index1=prompt("Indice 1: ");
        let index2=prompt("Indice 2: ");
        document.getElementById("intervalo").innerHTML=paises.splice(index1,index2);
    }else if(opcion==4){
        opcion=prompt("Menú: \n1.Añadir al principio\n2.Añadir al final");
        if(opcion==1){
            let añadido=prompt("Pais a añadir: ");
            paises.unshift(añadido);
        }else if(opcion==2){
            let añadido=prompt("Pais a añadir: ");
            paises.push(añadido);
        }else {
            console.log("Opcion no válida");
        }
    }else if(opcion==5){
        opcion=prompt("Menú: \n1.Borrar al principio\n2.Borrar al final");
        if(opcion==1){
            console.log("Pais borrado: "+paises.shift());
        }else if(opcion==2){
            console.log("Pais borrado: "+paises.pop());
        }else {
            console.log("Opcion no válida");
        }
    }else if(opcion==6){
        opcion=prompt("Menú: \n1.Buscar por nombre\n2.Buscar por posicion");
        if(opcion==1){
            let buscado=prompt("Pais a buscar: ");
            document.getElementById("consulta").innerHTML=paises.indexOf(buscado);
        }else if(opcion==2){
            let index=prompt("Posicion a buscar: ");
            document.getElementById("consulta").innerHTML=paises[index];
        }else {
            console.log("Opcion no válida");
        }
    }else if(opcion==7){
        console.log("Gracias por usar el programa");
        console.log("Saliendo...");
    }else{
        console.log("Opcion no válida");
    }

}while(opcion!=7)
