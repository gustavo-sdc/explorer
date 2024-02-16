import * as el from './elements.js'
import { timerControlls, controlls } from './elements.js'
import state from './state.js'
import * as functions from './functions.js'

export function controllTimer(){
    timerControlls.addEventListener('click', event =>{
        const action = event.target.dataset.action

        if(typeof action === 'undefined'){
            return
        }

        if(action === 'playTimer'){
            functions.toggleRunning()
            state.isRunning = true
        }
        
        if(action === 'stopTimer'){
            state.isRunning = false
            functions.toggleRunning()
        }

        if(action === 'addTimer'){
            changeTimer(action)
        }

        if(action === 'lessTimer'){
            changeTimer(action)
        }

    })


}

export function controllSound(){
    controlls.addEventListener('click', event =>{
        const action = event.target.dataset.action
        console.log(action)


        if(typeof action === 'undefined'){
            console.log(action)
            return
        }

        if(action === 'musicTree'){
            console.log('MusicTree On')
            state.musicOn = !state.musicOn
            
            if(state.musicOn){
                music.treeAudio.play()
                return
            }

            music.treeAudio.pause()
        }

        if(action === 'musicRain'){
            music.rainAudio.play()
        }

        if(action === 'musicShop'){
            music.storeAudio.play()
        }

        if(action === 'musicFlame'){
            music.flameAudio.play()
        }
    })
}

export function changeTimer(action){
    let minutes = Number(state.minutes)
    let seconds = Number(state.seconds)

    if(action === 'addTimer'){
        minutes += 5
        state.minutes = minutes

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
    
    functions.updateTimer(minutes, seconds)
}