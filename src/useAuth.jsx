import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () =>{
    const auth = useContext(AuthContext);
    return auth;
}

export const AuthProvider = ({children}) =>{
    const [estaAutenticado, setAutenticado] = useState(false);

    const login = () =>{
        setAutenticado(true);
    }

    const logout = () =>{
        setAutenticado(false);
    }

    return(
        <AuthContext.Provider value={{ estaAutenticado , login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}