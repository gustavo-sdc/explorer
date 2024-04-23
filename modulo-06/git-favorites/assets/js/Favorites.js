import { GitHubUser } from "./GitHubUser.js"    
import State from "./State.js"

class Favorites {
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }

    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.infos))
    }

    async add(username){
        try{
            const ifExist = this.infos.find(entry => entry.login === username)

            if (ifExist){
                throw new Error('Usuário já cadastrado')
            }

            const user = await GitHubUser.search(username)

            if(user.login === undefined){
                throw new Error('Usuário não encontrado!')
            }

            this.infos = [user, ...this.infos]
            this.update()
            this.save()

        }catch(error){
            alert(error.message)
        }
    }

    load(){
        this.infos = JSON.parse(localStorage.getItem
            ('@github-favorites:')) || []

        console.log(this.infos)
    }

    delete(user){
        const filterredInfos = this.infos.filter(entry => entry.login !== user.login)
        const length = filterredInfos.length

        this.infos = filterredInfos
        this.save()

        if(length !== 0){
            State.clean = false
        }

        this.update()

    }

    state(){
        const { length } = this.infos
        
        if(length === 0){
            State.listLength = false
        } else{
            State.listLength = true
        }

    }
}

export class FavoritesView extends Favorites {
    constructor(root){
        super(root)
        
        this.tbody = this.root.querySelector('table tbody')
        this.update()
        this.onAdd()
    }

    onAdd(){
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')
            this.add(value)
        }
    }

    update(){
        const tbody = this.root.querySelector('tbody')
        this.state()

        if(!State.listLength){   
            const defaultRow = this.createDefaultRow()
            
            this.removeAllTr()
            tbody.append(defaultRow)
            
            return

        }else{

            this.removeAllTr()
            console.log(this.infos)
    
            this.infos.forEach( user => {
                const row = this.createRow(user.login, user.name, user.public_repos, user.followers)
                console.log(row)
                
                row.querySelector('.remove').onclick = ()=>{
                    const isOk = confirm(`Você tem certeza que deseja excluir o ${user.name} da sua lista de favoritos?`)
                    if (isOk){
                        this.delete(user)
                    }
                }
    
                this.tbody.append(row)
            })
        }

    }

    createRow(user, name, repos, foll){
        const tr = document.createElement('tr')
        tr.innerHTML= `
        <td class="user">
            <div>
                <img src="https://github.com/${user}.png" alt="Imagem MaykBrito">
                <a href="https://github.com/${user}" target="_blank">
                    <p>${name}</p>
                    <span>${user}</span>
                </a>
            </div>
        </td>
        <td>
            <p class="infos">
                ${repos}
            </p>
        </td>
        <td>
            <p class="infos">
                ${foll}
            </p>
        </td>
        <td>
            <button class="remove">Remover</button>
        </td>
        `

        return tr
    }

    createDefaultRow(){
        const deafultTr = document.createElement('tr')
        deafultTr.innerHTML =`
            <td class="not-favorites" colspan="4" scope="row"> 
                <div>
                    <img src="./assets/img/Estrela.png" alt="">
                    <p>Nenhum favorito ainda</p>
                </div>
            </td>
        ` 

        return deafultTr
    }

    removeAllTr(){
        const tbody = this.root.querySelector('table tbody')

        tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })        
    }
}