import React, {useContext}  from "react";
import {
    BrowserRouter as Routers,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LoginPage from "./Pages/LoginPages/login"
import HomePage from "./Pages/Home/index"
import NotLoggedPage from "./Pages/Home/notlogged";

import { AuthProvider, AuthContext } from "./Pages/contexts/auth";

const AppRoutes = () => {
    const Private = ({children}) =>{
        const {authenticated, loading} = useContext(AuthContext);
        
        if (loading){
            return <div className="loading">Carregando informações...</div>
        };

        if (!authenticated) { 
            return <Navigate to="/login"/>;
        };

        return children; 


    }

       return(
        <Routers>
            <AuthProvider>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/notlog" element={<NotLoggedPage/>}/>
                <Route exact path="/" element={<Private><HomePage/></Private>}/>
            </Routes>
            </AuthProvider>
        </Routers>
    )

}

export default AppRoutes;
