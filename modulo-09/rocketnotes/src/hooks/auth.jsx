import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api.js'

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})  

    async function signIn({ email, password}){
        try{
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data  

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user, token })
        }
        catch (error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível entrar")
            }
        }
    }

    async function updateProfile({ user, avatarFile }){
        try{
            if(avatarFile){
                const fileUpdateForm = new FormData()
                fileUpdateForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUpdateForm)
                user.avatar = response.data.avatar

                console.log(response.data)
            }

            await api.put("/users", user)
            localStorage.setItem("@rocketseat:user", JSON.stringify(user))

            setData({user, token: data.token})
            alert("perfil atualizado")
        }
        catch (error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível atualizar o perfil")
            }
        } 
    }

    function signOut(){
        localStorage.removeItem("@rocketnotes:user")
        localStorage.removeItem("@rocketnotes:token")

        setData({})
    }

    useEffect(() =>{
        const token = localStorage.getItem("@rocketnotes:token")
            const user = localStorage.getItem("@rocketnotes:user")


        if( token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }

    }, [])

    return(
        <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user, }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    console.log(context.user)

    return context
}

export { AuthProvider, useAuth }