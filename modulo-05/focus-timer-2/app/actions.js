import { timerControlls, controlls } from './elements.js'
import state from './state.js'
import * as functions from './functions.js'
import * as music from './music.js'


export function controllTimer(){
    timerControlls.addEventListener('click', event =>{
        const action = event.target.dataset.action


        if(typeof action === 'undefined'){
            return
        }

        if(action === 'playTimer'){
            state.isRunning = true
            functions.toggleRunning()
        }
        
        if(action === 'stopTimer'){
            state.isRunning = false
            functions.toggleRunning()
        }

        if(action === 'addTimer'){
            functions.changeTimer(action)
        }

        if(action === 'lessTimer'){
            functions.changeTimer(action)
        }

    })


}

export function controllSound(){
    controlls.addEventListener('click', event =>{
        const action = event.target.dataset.action

        if(typeof action === 'undefined'){
            return
        }

        if(action === 'musicTree'){
            functions.updateMusic('musicTree')
        }

        if(action === 'musicRain'){
            functions.updateMusic('musicRain')
        }

        if(action === 'musicShop'){
            functions.updateMusic('musicShop')
        }

        if(action === 'musicFlame'){
            functions.updateMusic('musicFlame')
        }
    })
}