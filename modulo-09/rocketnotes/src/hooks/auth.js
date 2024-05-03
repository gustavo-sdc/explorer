import { createContext } from "react";

const AuthContext = createContext({})

function AuthProvider({children}){
    return(
        <AuthContext.Provider value={{name: "Gustavo", email:"gustavo@gmail.com"}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }