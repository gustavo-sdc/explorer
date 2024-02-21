import * as el from './elements.js'

export class Router{
    routes = {}
    
    add(routeName, link){
        this.routes[routeName] = link
    }

    route(event){
        event = event || window.event
        let routeURL, eventName
    
        if(event){
            let routeURL = event.target.href
            let eventName = event.target.name
    
            if(eventName){
                el.main.classList.replace(el.main.className, eventName)
            }
            
            window.history.pushState({}, "", routeURL) 
        }        
        this.handle()
    }

    handle(){
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes['/']
    
        fetch(route).then(data => data.text()).then(html => {
            el.main.innerHTML = html
        })
    }

}