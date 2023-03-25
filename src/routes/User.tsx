// @ts-ignore
import {api, getUser} from "../../lib/axios";
import {useLoaderData} from "react-router-dom";

// type User = {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     address: {
//         street: string;
//         suite: string;
//         city: string;
//         zipcode: string;
//         geo: {
//             lat: string;
//             lng: string;
//         }
//     };
//     phone: string;
//     website: string;
//     company: {
//         name: string;
//         catchPharse: string;
//         bs: string;
//     };
// }[]

// @ts-ignore
export async function loader({params}) {
    const user = await api.get(`users/${params.id}`)
        .then(
            resp => {
                return resp.data ?? null
            })
    return {user}
}

export const User = () => {
    // @ts-ignore
    const {user} = useLoaderData();
    let link = `https://${user.website}`
    return (
        <>
            <main
                className={`h-[calc(100dvh-5rem)] overflow-hidden flex justify-center items-center`}
            >
                <section className={`container w-[calc(100dvh-20rem] h-fit lg:h-[calc(100dvh-10rem)] overflow-scroll  p-4 mx-auto border-2 border-gray-300
            rounded-lg px-8`}>
                    <div
                        className={` text-gray-800 mb-12`}>
                        <p className={`tracking-[1rem] text-2xl`}>{user.name}</p>
                        <p className={`text-lg text-gray-800`}>trabalhando na {user.company.name}</p>
                        <p className={`text-lg text-gray-800/70`}>{user.company.bs}</p>
                        <label className={`text-lg text-gray-800/70`}>{user.username}</label>
                    </div>

                    <article className={`mb-12`}>
                        <div className={`flex flex-row text-lg `}>E-mail: <p
                            className={`mx-4 text-gray-800/70 lowercase`}>{user.email}</p></div>
                        <div className={`flex flex-row text-lg `}>Telefone: <p
                            className={`mx-4 text-gray-800/70 lowercase`}>{user.phone}</p></div>
                    </article>


                    <div
                        className={``}>
                        Address:

                        <div
                            className={`space-y-2 flex flex-col`}>

                            <label
                                className={`flex flex-row border-2 rounded border-gray-300/40 px-4 py-2 text-gray-800`}> Rua:
                                <p
                                    className={`mx-2 text-gray-800/70`}> {user.address.street} </p>
                            </label>

                            <label
                                className={`flex flex-row border-2 rounded border-gray-300/40 px-4 py-2 text-gray-800`}> Numero:
                                <p
                                    className={`mx-2 text-gray-800/70`}> {user.address.suite} </p>
                            </label>

                            <label
                                className={`flex flex-row border-2 rounded border-gray-300/40 px-4 py-2 text-gray-800`}> Cidade:
                                <p
                                    className={`mx-2 text-gray-800/70`}> {user.address.city} </p>
                            </label>

                            <label
                                className={`flex flex-row border-2 rounded border-gray-300/40 px-4 py-2 text-gray-800`}> cep:
                                <p
                                    className={`mx-2 text-gray-800/70`}> {user.address.zipcode} </p></label>

                        </div>
                    </div>

                    <div
                        className={`flex justify-end mt-4`}>
                        <a href={link} target="_blank" className="self-end border border-gray-600/40
                                    hover:bg-gray-400/40
                                    rounded-lg p-2 bottom-0">
                            Visit website
                        </a>
                    </div>
                </section>
            </main>
        </>
    )

}