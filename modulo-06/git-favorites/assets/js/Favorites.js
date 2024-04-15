class Favorites {
    constructor(root){
        this.root = document.querySelector(root)
    }
}

export class Favorites extends Favorites {
    constructor(root){
        super(root)

        console.log(this.root)
    }

    update(user, name, repos, foll){
        this.removeAllTr()
    }

    createRow(){
        const tr = document.createElement('tr')
        tr.innerHTML= `
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

        return tr
    }

    removeAllTr(){
        const tbody = this.root.querySelector('table tbody');

        tbody.querySelectorAll(tr)
        .foreach((tr) => {
            tr.remove()
        })
    }
}