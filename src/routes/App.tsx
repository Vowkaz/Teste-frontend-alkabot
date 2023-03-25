import {Navbar} from "../components/NavBar";
import {Outlet} from "react-router-dom";

export const App = () => {
    return (
        <>
            <main
            className={`min-h-screen h-max w-auto bg-gradient-to-bl from-gray-200 to-gray-100`}>
                <Navbar />
                <Outlet />
            </main>
        </>
    )
}