import React from "react";
import { usePage, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

import Layout from "../Layout/Layout";
import Footer from "../Layout/Footer";

export default function Show(){
    const {posts, users, comments, auth} = usePage().props;
    let date = new Date(posts.updated_at);
    let user = users.find(user => {
        return user.id === posts.user_id;
    });

    const {data, setData, post} = useForm({
        message: "",
        post_slug: posts.slug,
        user_id: auth.user.id,
        post_id: posts.id
    });

    function submit(e){
        e.preventDefault();
        post('/comment');
    }

    function handleDelete(comment){
        Inertia.delete(`/comment/${comment.id}`);
    }

    return(
        <>
            <Layout/>
            <div className="w-4/5 m-auto text-left">
                <div className="py-15">
                    <h1 className="break-words text-6xl">
                        {posts.title}
                    </h1>
                </div>
            </div>

            <div>
                <img src={`../images/${posts.image_path}`} alt=""/>
            </div>

            <div className="w-4/5 m-auto pt-20">
                <span className="text-gray-500">
                    By <span className="font-bold italic text-gray-800">{user.name}</span>, Created on {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                </span>

                <p className="ilmari text-xl text-gray-700 pt-8 pb-10 leading-8 font-light">
                    {posts.description}
                </p>
            </div>

            <div>
                <p>Comments</p>
                <form onSubmit={submit}>
                    <textarea 
                        value={data.message} onChange={e => setData('message', e.target.value)}
                        placeholder="Message..."
                        className="py-10 bg-transparent block border-b-2 w-full h-30 text-xl outline-none"></textarea>

                    <button    
                        type="submit"
                        className="uppercase mt-15 bg-blue-500 text-gray-100 text-lg font-extrabold py-4 px-8 rounded-3xl">
                        Submit Comment
                    </button>
                </form>
                
                {comments.map(comment => {
                    let date = new Date(comment.updated_at);
                    let user = users.find(user => {
                        return user.id === comment.user_id;
                   });
                    return (
                        <>
                            {comment.post_id === posts.id ?
                                <div className="commentBox" key={comment.id}> 
                                    <div className="commentInfoAndDelete">
                                        <div className="commentInfo">
                                            <p>{user.name}</p>
                                            <p>{`, posted on ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
                                        </div>
                                        {auth.user !== null && auth.user.id == comment.user_id ?
                                        <button
                                            className="text-red-500 pr-3"
                                            type="button"
                                            onClick={() => handleDelete(comment)}>
                                            Delete
                                        </button>
                                    :
                                        null
                                    }
                                    </div>
                                    <div className="break-words">
                                        <p>{comment.message}</p>
                                    </div>
                                    
                                </div>
                            :
                                null
                            }
                        </>
                    );
                })}
            </div>

            <Footer/>
        </>
    );
}