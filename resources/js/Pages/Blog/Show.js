import React from "react";
import { usePage } from "@inertiajs/inertia-react";

import Layout from "../Layout/Layout";
import Footer from "../Layout/Footer";

export default function Show(){
    const {post, users} = usePage().props;
    let date = new Date(post.updated_at);
    let user = users.find(user => {
        return user.id === post.user_id;
   });

    return(
        <>
            <Layout/>
            <div className="w-4/5 m-auto text-left">
                <div className="py-15">
                    <h1 className="text-6xl">
                        {post.title}
                    </h1>
                </div>
            </div>

            <div>
                <img src={`../images/${post.image_path}`} alt=""/>
            </div>

            <div className="w-4/5 m-auto pt-20">
                <span className="text-gray-500">
                    By <span className="font-bold italic text-gray-800">{user.name}</span>, Created on {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                </span>

                <p className="text-xl text-gray-700 pt-8 pb-10 leading-8 font-light">
                    {post.description}
                </p>
            </div>
            <Footer/>
        </>
    );
}