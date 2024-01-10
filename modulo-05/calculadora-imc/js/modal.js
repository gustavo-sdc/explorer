export const Modal = {
    mainContainer: document.querySelector('main'),
    responseBox: document.querySelector('#response'), 
    height: document.querySelector('#height'),
    weight: document.querySelector('#weight'),

    boxToggle(){
        Modal.mainContainer.classList.toggle('hide')
        Modal.responseBox.classList.toggle('hide')
    },
}