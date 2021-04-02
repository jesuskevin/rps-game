'use strict';

const cpuOptions = ["Piedra", "Papel", "Tijeras"];

function jugadaCpu(){
    return cpuOptions[~~(Math.random() * cpuOptions.length)];
}

var cpuSelection;
var userSelection;
var cpuScore;
var userScore;

jugar();

function jugar(){
    cpuScore = 0;
    userScore = 0;

    for(let i = 0; i < 5; i++){
        jugadaUser();
    }

    console.log(declararGanador());

    function declararGanador(){
        if(userScore === cpuScore){
            alert(userScore + '-' + cpuScore);
            return userScore + '-' + cpuScore + "\nJuego empatado";
        }else if(userScore > cpuScore){
            alert(userScore + '-' + cpuScore);
            return userScore + '-' + cpuScore + "\nHaz ganado";            
        }else{
            alert(userScore + '-' + cpuScore);
            return userScore + '-' + cpuScore + "\nHaz perdido";
        }
    }
}

function jugadaUser(){
    userSelection = prompt("Pierda, Papel o Tijeras");
    if(
        userSelection.toLowerCase() == "piedra"||
        userSelection.toLowerCase() == "papel"||
        userSelection.toLowerCase() == "tijeras"
    ){
        console.log(jugarRonda(userSelection, cpuSelection));
    }else{
        alert("Ingrese una opcion valida");
        jugadaUser();
    }
}

function jugarRonda(userSelection, cpuSelection){
    cpuSelection = jugadaCpu().toLowerCase();
    userSelection = userSelection.toLowerCase();

    if(cpuSelection == userSelection){
        alert('Empate');
        return 'Juego empate: \nTu puntuacion ' + userScore + '\nPuntuacion CPU: ' + cpuScore;
    }else if(
        (cpuSelection == 'piedra' && userSelection == 'tijeras')||
        (cpuSelection == 'tijeras' && userSelection == 'papel')||
        (cpuSelection == 'papel' && userSelection == 'piedra')
    ){
        alert('Perdiste ' + cpuSelection + ' gana a ' + userSelection);
        return 'Puntuacion cpu: ' + ++cpuScore + ' \nTu puntuacion ' + userScore;
    }else {
        alert('Ganaste ' + userSelection + ' gana a ' + cpuSelection);
        return 'Puntuacion cpu: ' + cpuScore + ' \nTu puntuacion ' + ++userScore;
    }
}