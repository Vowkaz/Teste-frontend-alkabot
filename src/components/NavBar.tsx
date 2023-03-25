/**
 * Criar rota para todos Post e User
 */
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav
                className={`h-20 border-b-2 border-gray-300 bg-gray-200 flex justify-center items-center lg:justify-start lg:items-center px-8 text-gray-600`}>
                <Link
                    className={`mx-2 border border-gray-600/40 rounded-lg px-4 py-1 text-2xl hover:bg-gray-300 hover:text-gray-900
                    shadow-black shadow-sm  hover:shadow-gray-600`}
                    to="/posts"
                >
                    All posts
                </Link>

                <Link
                    className={`mx-2 border border-gray-600/40 rounded-lg px-4 py-1 text-2xl hover:bg-gray-300 hover:text-gray-900
                    shadow-black shadow-sm hover:shadow-gray-600`}
                    to="users"
                >
                    See users
                </Link>
            </nav>
        </>
    )
}