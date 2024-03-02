class Favorites {
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }   

    load(){
        this.infos =[{
            login:'maykbrito',
            name: 'Mayk Brito',
            public_repos: '76',
            followers: '120000'
        },
        {
            login:'maykbrito',
            name: 'Mayk Brito',
            public_repos: '76',
            followers: '120000'
        }
    ]
    }

    delete(user){
        const filterredInfos = this.infos.filter(entry =>{
            entry.login !== user.login
        })

        this.infos = filterredInfos
    }
}

export class FavoritesView extends Favorites {
    constructor(root){
        super(root)

        this.tbody = this.root.querySelector('table tbody')
        this.update()
    }

    update(){
        this.removeAllTr()


        this.infos.forEach( user =>{
            const row = this.createRow(user.login, user.name, user.public_repos, user.followers)
            console.log(row)

            row.querySelector('.remove').onclick = ()=>{
                const isOk = confirm(`Tem certeza que deseja exluir o ${user.name} da sua lista de favoritos?`)

                if(isOk){
                    this.delete()
                }
            }

            this.tbody.append(row)
        })
    }

    createRow(user, name, repos, foll){
        const data = document.createElement('tr')
        data.innerHTML = `
        <td class="user">
            <img src="https://github.com/${user}.png" alt="Imagem MaykBrito">
            <a href="https://github.com/${user}" target="_blank">
                <p>${name}</p>
                <span>${user}</span>
            </a>
        </td>
        <td>
            ${repos}
        </td>
        <td>
            ${foll}
        </td>
        <td>
            <button class="remove">&times;</button>
        </td>
        `

        return data
    }

    removeAllTr(){

        this.tbody.querySelectorAll('tr').forEach((tr) =>{
            tr.remove()
        })
    }
}