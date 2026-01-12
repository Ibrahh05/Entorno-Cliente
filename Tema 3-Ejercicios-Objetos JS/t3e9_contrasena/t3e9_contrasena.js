const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-_@#$%&])[A-Za-z\d-_@#$%&]+$/;
let contrasena = prompt("Introduce tu contraseña:");
if (contrasena.length >=8 && contrasena.length <=16 && regex.test(contrasena) == true ){
    alert("Contraseña segura")
}else{
    alert("Contraseña no segura")
}