import {api} from "../../lib/axios";
import {Link, Outlet, useLoaderData} from "react-router-dom";

// @ts-ignore
export async function loader({params}) {
    const post = await api.get(`posts/${params.id}`)
        .then(
            resp => {
                return resp.data ?? null
            })
    return {post}
}

export const Post = () => {

    // @ts-ignore
    const {post} = useLoaderData()
    return (
        <>
            <main className={`w-full lg:w-[calc(100dvw-5rem)] mx-0 lg:mx-auto h-max bg-gray-200 my-8 space-y-2 rounded-lg
                border-2 border-gray-300 flex flex-col`}>
                <p className={`px-8 py-4 text-2xl border-b-2 border-gray-300`}>{post.title}</p>
                <p className={`px-8 h-fit py-4 text-2xl text-gray-800/80`}>{post.body}</p>

                <div className={`p-4`}>
                    <Link
                        to={`/users`}
                        className={`text-gray-700/80  mx-4 hover:text-gray-900`}>
                        Come back
                    </Link>
                </div>
            </main>
            <Outlet />
        </>
)
}