/*
    Pegar todos os elementos

    -> Tornar o campo dos minutos e segundos clicável e editável;
    -> Criar função do timer;

*/

import state from "./state.js";


export function start(minutes, seconds){
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()

}