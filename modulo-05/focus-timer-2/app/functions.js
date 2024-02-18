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

export function changeTimer(action){
    let minutes = Number(state.minutes)
    let seconds = Number(state.seconds)

    if(action === 'addTimer'){
        minutes += 5
        state.minutes = minutes
        state.seconds = seconds

        if(minutes > 60){
            minutes = 60
            seconds = 0

            state.minutes = minutes
            state.seconds = seconds

            functions.updateTimer(minutes, seconds)

            return
        }

        if(minutes === 60){
            seconds = 0
            functions.updateTimer(minutes, seconds)
        }
    }
    
    if(action === 'lessTimer'){
        minutes -= 5

        if(minutes <0){
            return
        }

        state.minutes = minutes
    }
    
    updateTimer(minutes, seconds)
}

export function updateTimer(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds
        
    el.minutes.textContent = String(minutes).padStart(2,"0")
    el.seconds.textContent = String(seconds).padStart(2,"0")


    state.minutes = minutes
    state.seconds = seconds
}

export function updateMusic(sound){
    console.log(state.musicOn)

    if( state.musicOn === true){
        switch(sound){    
            case 'musicTree' :
                music.treeAudio.pause()
                break
            case 'musicRain':
                music.rainAudio.pause()
                break
            case 'musicShop':
                music.storeAudio.pause()
                break
            case 'musicFlame':
                music.storeAudio.pause()
                break
    
            default:
                console.log(`Erro`)
        }

        state.musicOn = !state.musicOn
        return
    }

    switch(sound){    
        case 'musicTree' :
            music.treeAudio.play()
            break
        case 'musicRain':
            music.rainAudio.play()
            break
        case 'musicShop':
            music.storeAudio.play()
            break
        case 'musicFlame':
            music.storeAudio.play()
            break

        default:
            console.log(`Erro`)
    }

    state.musicOn = !state.musicOn
}