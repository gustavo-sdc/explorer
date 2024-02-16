import * as el from './elements.js'
import state from './state.js'
import * as music from './music.js'

export function toggleRunning(){
    clearTimeout(state.countId)

    if (!state.isRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if (seconds < 0){
        seconds = 59
        minutes --
    } 

    if (minutes < 0){
        minutes = 0
        seconds = 0
        
        state.minutes = minutes
        state.seconds = seconds

        updateTimer(minutes, seconds)
        return
    }    

    updateTimer(minutes, seconds)
    state.countId = setTimeout(() => toggleRunning(), 1000) 
}

export function updateTimer(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds
        
    el.minutes.textContent = String(minutes).padStart(2,"0")
    el.seconds.textContent = String(seconds).padStart(2,"0")
}
