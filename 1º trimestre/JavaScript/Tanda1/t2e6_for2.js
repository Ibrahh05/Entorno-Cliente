for (let i=9; i<=21;i++){
    for (let j=0; j<=55; j+=5){ 

        
        
        if (j<10){
            let hora = i + ":0" + j;
            document.writeln(hora + "<br>");
        }else{
            if (i===21 && j>30){
                break;
            }
            let hora = i + ":" + j;
        document.writeln(hora + "<br>");
        }
        
}
}