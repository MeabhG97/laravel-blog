import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";

import Layout from "./Layout/Layout";
import Footer from "./Layout/Footer";

export default function Index(){

    const {posts} = usePage().props;

    let recentPosts = posts.slice(0,4);

    return(
        <>
            <Layout/>
            <div className="background-image grid grid-cols-1 m-auto">
                <div className="flex text-gray-100 pt-10">
                    <div className="title-text-holder m-auto pt-4 pb-8 pl-2 pr-2 sm:m-auto w-4/5 block text-center">
                        <h1 className="break-words sm:text-white text-5xl uppercase font-bold text-shadow-md pb-14">
                            READY TO JUMP INTO ENGAGING PROGRAMMING DISCUSSIONS?
                        </h1>
                        <Link 
                            href="/blog"
                            className="text-center bg-gray-50 text-gray-700 py-2 px-4 font-bold text-xl">
                            Click Here!
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center p-15 bg-gray-800 text-white">
                <h2 className="text-2xl pb-5 text-l"> 
                    We support these resources, that let you learn...
                </h2>

                <a href="https://www.w3schools.com/php/" target="_blank" className="font-extrabold block text-4xl py-1">
                    PHP
                </a>
                <a href="https://www.w3schools.com/java/" target="_blank" className="font-extrabold block text-4xl py-1">
                    Java
                </a>
                <a href="https://cplusplus.com/doc/tutorial/" target="_blank" className="font-extrabold block text-4xl py-1">
                    C++
                </a>
                <a href="https://docs.python.org/3/tutorial/index.html" target="_blank" className="font-extrabold block text-4xl py-1">
                    Python
                </a>
            </div>

            <div className="text-center py-15">

                <h2 className="text-4xl font-bold py-10">
                    Recent Posts
                </h2>

                <p className="m-auto w-4/5 text-gray-500">
                    Here are some of the most recent posts from our vibrant community!
                </p>
            </div>

            <div className="sm:grid grid-cols-2 w-4/5 m-auto">
                {recentPosts.map(post => {
                    return(
                        <div className="flex bg-gray-800 border-4 border-white text-gray-100 pt-10" key={post.slug}>
                            <div className="m-auto pt-4 pb-16 sm:m-auto w-4/5 block">
                                <span className="uppercase text-xs">
                                    {post.title}
                                </span>

                                <h3 className="text-xl font-bold py-10">
                                    {post.description.length > 250 ?
                                        <>{post.description.substring(0, 250) + "..."}</>
                                    :
                                        <>{post.description}</>
                                    }
                                </h3>

                                <Link 
                                    href={`blog/${post.slug}`}
                                    className="uppercase bg-transparent border-2 border-gray-100 text-gray-100 text-xs font-extrabold py-3 px-5 rounded-3xl">
                                    Read more
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Footer/>
        </>
    );
}