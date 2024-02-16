import * as el from './elements.js'
import state from './state.js'

export function toggleRunning(){
    console.log(state.countId)
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
        console.log(minutes)
    } 

    if (minutes < 0){
        el.seconds.textContent = String(state.seconds).padStart(2,"0")
        el.minutes.textContent = String(state.minutes).padStart(2,"0")
        return
    }    

    el.minutes.textContent = String(minutes).padStart(2,"0")
    el.seconds.textContent = String(seconds).padStart(2,"0")
    state.countId = setTimeout(() => toggleRunning(), 1000) 
}