let numero = 0;

function timer() {
    numero = numero + 1;
    console.log(numero);
    if (numero >= 100) {
        location.reload();
        
    }


}

function activetimer() {
    console.log('En esta consola se mostrará el temporizador de la página web, cuando llegue a 100 se reiniciará');
    timeractivated = setInterval(timer, 1000);
}

function desactivetimer(){
    clearInterval(timeractivated);
    console.log('Temporizador desactivado');
}