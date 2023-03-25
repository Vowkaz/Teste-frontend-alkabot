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
    // @ts-ignore
    return <>
        {comments.map((e:any, i:number) => {
            return <main
                key={e.id + i}
                className={`w-full lg:w-[calc(100dvw-10rem)] mx-0 my-2 lg:mx-auto h-max bg-gray-200 rounded-lg
            border-2 border-gray-300`}>
                <div>
                    <div className={`px-8 py-4 text-xl border-b-2 border-gray-300 flex justify-between items-center
                        flex-col lg:flex-row`}>
                        <p> {e.name}</p>
                        <p className={`text-sm text-gray-800/70`}> {e.email}</p>

                    </div>
                </div>
                <p className={`px-8 h-fit py-4 text-lg text-gray-800/80`}>{e.body}</p>
            </main>
        })}
    </>
}