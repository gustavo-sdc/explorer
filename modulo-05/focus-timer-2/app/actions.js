import * as el from './elements.js'
import { timerControlls } from './elements.js'
import state from './state.js'
import * as functions from './functions.js'

export function controllTimer(){
    timerControlls.addEventListener('click', event =>{
        const action = event.target.dataset.action

        if(typeof action === 'undefined'){
            console.log(action)
            return
        }

        if(action === 'playTimer'){
            state.isRunning = !state.isRunning
            functions.toggleRunning()
        }
        
        

    })


}

export function changeTimer(){

}

export function toggleMusic(){

}