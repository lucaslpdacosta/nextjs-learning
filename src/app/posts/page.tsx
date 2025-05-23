import Link from "next/link";

export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number
}

interface ResponseProps {
    posts: PostProps[]
}

export default async function Posts() {
    const response = await fetch('https://dummyjson.com/posts',{
        // cache: 'no-cache',
        cache: 'force-cache',
        next: {
            revalidate: 60
        }
    })

    const data: ResponseProps = await response.json()
   
    async function handleFetchPosts(){
        'use server';
        const response = await fetch('https://dummyjson.com/posts')
        const data: ResponseProps = await response.json()
        console.log (data.posts);
    }

    async function handleSearchUsers(formData: FormData) {
        'use server';

        const userId = formData.get('userId')

        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`)
        const data: ResponseProps = await response.json()

        console.log(data)
    }

    return (
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">posts</h1>
            <button onClick={handleFetchPosts}>
                Posts
            </button>
            <form className="flex gap-2 my-4" action={handleSearchUsers}>
                <input type="text" placeholder="result" className="border border-gray-200 p-2" name="userId"/>
                <button className="bg-blue-500 text-white p-2" type="submit">
                    Send result
                </button>
            </form>
            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map(post => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                        <Link className="text-blue-500" href={`/posts/${post.id}`}>
                            Acessar detalhes
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}