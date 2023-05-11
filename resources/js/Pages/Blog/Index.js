import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function index(){
    const {posts, auth} = usePage().props;

    function handleDelete(post){
        Inertia.delete(`/blog/${post.slug}`);
    }

    return(
        <>
            <div className="w-4/5 m-auto text-center">
                <div className="py-15 border-b border-gray-200">
                    <h1 className="text-6xl">
                        Blog Posts
                    </h1>
                </div>
            </div>

            {auth.user !== null ?
                <div className="pt-15 w-4/5 m-auto">
                    <a 
                        href="/blog/create"
                        className="bg-blue-500 uppercase bg-transparent text-gray-100 text-xs font-extrabold py-3 px-5 rounded-3xl">
                        Create post
                    </a>
                </div>
            :
                null
            }
            
            {posts.map(post => {
                let date = new Date(post.updated_at);
                return (<div className="sm:grid grid-cols-2 gap-20 w-4/5 mx-auto py-15 border-b border-gray-200" key={post.slug}>
                    <div>
                        <img src={`images/${post.image_path}`} alt=""/>
                    </div>
                    <div>
                        <h2 className="text-gray-700 font-bold text-5xl pb-4">
                            {post.title}
                        </h2>
            
                        <span className="text-gray-500">
                            By <span className="font-bold italic text-gray-800">{"USER"}</span>, Created on {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                        </span>
            
                        <p className="text-xl text-gray-700 pt-8 pb-10 leading-8 font-light">
                            {post.description}
                        </p>
            
                        <a href={`/blog/${post.slug}`} className="uppercase bg-blue-500 text-gray-100 text-lg font-extrabold py-4 px-8 rounded-3xl">
                            Keep Reading
                        </a>

                        {auth.user !== null && auth.user.id === post.user_id ?
                            <>
                                <span className="float-right">
                                    <a 
                                        href={`/blog/${post.slug}/edit`}
                                        className="text-gray-700 italic hover:text-gray-900 pb-1 border-b-2">
                                        Edit
                                    </a>
                                </span>
                
                                <span className="float-right">
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(post)}
                                        className="text-red-500 pr-3">
                                        Delete
                                    </button>
                
                                </span>
                            </>
                            :
                            null
                        }
                    </div>
                </div>)
            })}
        </>
    );
}