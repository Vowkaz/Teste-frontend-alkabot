import {Link, useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error:any = useRouteError();
    console.error(error);
    return (
        <section id="error-page"
                 className={`flex flex-col items-center justify-center bg-gradient-to-bl from-gray-200 to-gray-100 h-screen text-2xl`}>
            <h1 className={`font-bold text-6xl mb-24`}>Oops!</h1>
            <p>Foi mal!, parece que você está na página errada.</p>
            <p>
                <i>{error.message || error.statusText}</i>
            </p>
            <Link
                className={`mt-8 mx-2 px-4 py-1 text-2xl text-gray-400 hover:text-slate-900`}
                to="/"
            >
                Venha para o inicio
            </Link>
        </section>
    );
}