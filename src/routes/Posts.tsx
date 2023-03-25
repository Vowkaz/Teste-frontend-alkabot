import {useEffect, useState} from "react";
import {api} from "../../lib/axios";
import {Link} from "react-router-dom";

type postType = {
    userId: number;
    id: number;
    title: string;
    body: string;
}[]
export const Posts = () => {
    const [posts, setPosts] = useState<postType>([])


    useEffect(() => {
        // get posts
        api.get('posts')
            .then(
                resp => {
                    setPosts(resp.data)
                })
            .catch(() => {
                console.log("Lista de publicacoes não foi encontrada")
            })
    }, [])
    return (
        <main
            className={`bg-gradient-to-bl from-gray-200 flex mx-0 lg:mx-auto w-full lg:w-[calc(100dvw-10rem)] h-max  justify-center items-center`}>
            <div className={`min-h-[calc(100dvh-5rem)] h-max grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 grid-flow-row-dense
                    gap-2 lg:gap-4 py-4 `}>
                {posts.map((e, i) => {
                    return (
                        <Link
                            to={`${e.id}/comments`}
                            key={e.id + i}
                            className={`text-lg bg-gray-300/40 border-gray-700/40 h-auto border rounded-lg hover:bg-gray-400/30`}
                        >
                            <div className={`truncate border-b-2 border-gray-400/40 px-4 py-2 bg-gray-400/10`}>
                                {e.title}
                            </div>
                            <div className={`px-4 py-2 text-ellipsis `}>
                                {e.body}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}