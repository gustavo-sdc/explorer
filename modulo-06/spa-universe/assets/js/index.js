import * as el from './elements.js'
import { Router } from './routes.js'

const router = new Router()
router.add('/', 'assets/layouts/home.html')
router.add('/o-universo', 'assets/layouts/o-universo.html')
router.add('/exploracao','assets/layouts/exploracao.html' ) 


el.controlls.addEventListener('click', event =>{
    event.preventDefault()
    router.route()
})

router.route()    