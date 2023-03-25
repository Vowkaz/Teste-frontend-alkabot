import {api} from "../../lib/axios";
import {Link, useLoaderData} from "react-router-dom";

// @ts-ignore
export async function loader({params}) {
    const comments = await api.get(`posts/${params.id}/comments`)
        .then(
            resp => {
                return resp.data ?? null
            })
    return {comments}
}

export const Comments = () => {
    // @ts-ignore
    const {comments} = useLoaderData()
    return (
        <>
            <Link
                to={`/posts`}
                className={`border-2 border-gray-600/400 rounded-lg px-4 py-2 flex items-center w-fit`}>
                Come back
            </Link>
        </>
    )
}