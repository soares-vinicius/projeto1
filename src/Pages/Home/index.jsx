import React, {useContext} from "react";
import { AuthContext } from "../contexts/auth";

const HomePage = () => {
    const {authenticated, logout} = useContext(AuthContext);

    const handleLogout = () =>{
        logout();

    }
    return <>
    <h1>Home Page</h1>
    <h2>Voce está logado</h2>
    <p>{String (authenticated)}</p>
    <button onClick={handleLogout}>Logout</button>
    </>   
}
export default HomePage