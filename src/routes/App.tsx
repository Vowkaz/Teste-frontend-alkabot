import {Navbar} from "../components/NavBar";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {api} from "../../lib/axios";

export const App = () => {
    const ref = window.location.href.slice(-1)
    useEffect(()=>{
        if(ref !== 's') {
            api.get('user/1').catch(err => window.location.href = "/posts").then((resp)=>window.location.href = "/posts")
        }
    },[])

    return (
        <>
            <main
                className={`min-h-screen h-max w-auto bg-gradient-to-bl from-gray-200 to-gray-100`}>
                <Navbar/>

                <Outlet/>

            </main>
        </>
    )
}