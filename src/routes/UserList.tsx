/**
 * Componentes para pegar todos os usuarios
 */

import {api} from "../../lib/axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


type UserList = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPharse: string;
        bs: string;
    };
}[]

export const Users = () => {
    const [users, setUsers] = useState<UserList>([])


    useEffect(() => {
        // get users
        api.get('users')
            .then(
                resp => {
                    setUsers(resp.data)
                })
            .catch(() => {
                console.log("Lista de usuarios não foi recebida")
            })
    }, [])

    return (
        <>
            <main className={`flex container h-max  justify-center items-center`}>
                <section className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row-dense
                    gap-2 my-4`}>

                    {users.map((e, i) => {
                        let link = `https://${e.website}`
                        return (
                            <section
                                className="w-[90dvw] md:w-[35dvw] lg:w-[25dvw] 2xl:w-[20dvw] h-fit
                       bg-gray-300/40 border border-gray-700/40 px-4 py-8 rounded-lg flex flex-col "
                                key={e.id + i}
                            >
                                <div className="w-full h-fit flex  flex-col justify-between">

                                    <h2 className="text-2xl font-light  pb-2">{e.name}</h2>

                                    <p className="text-gray-700">{e.email}</p>

                                </div>
                                <nav className={`mt-4 space-x-4`}>

                                    <a href={link} target="_blank" className="self-end border border-gray-600/40
                                    hover:bg-gray-300/50
                                    rounded-lg p-2 bottom-0">
                                        Visit website
                                    </a>
                                    <Link className={`text-gray-700/80 items-center mx-4 hover:text-gray-900`} to={`${e.id}`}>
                                        See me
                                    </Link>

                                </nav>
                            </section>
                        )
                    })}
                </section>
            </main>
        </>
    )
}