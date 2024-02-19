export class Router{
    routes = {}

    add(routName, link){
        this.routes[routName] = link
    }

    route(event){
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }
    
    handle(){
        const { pathname } = window.location
    
        console.log(pathname)
        
        const route = this.routes[pathname] || this.routes[404]
    
        fetch(route)
        .then(data => data.text())
        .then(html => {
            console.log(html)
            document.querySelector('.app').innerHTML = html
        })
    }
}

export default new Router()