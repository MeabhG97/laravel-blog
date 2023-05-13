import React from "react";
import { usePage, useForm } from "@inertiajs/inertia-react";
import Layout from "../Layout/Layout";
import Footer from "../Layout/Footer";

export default function Edit(){
    const {post, errors} = usePage().props;

    const {data, setData, put} = useForm({
        title: post.title,
        description: post.description,
        image: ""
    });

    function submit(e){
        e.preventDefault();
        put(`/blog/${post.slug}`);
    }

    return(
        <>
            <Layout/>

            {Object.keys(errors).length !== 0 ?
                Object.entries(errors).map(([key, value]) => {
                    console.log(value)
                    return(
                        <div className="w-4/5 m-auto">
                            <ul>
                                <li className="w-1/5 mb-4 text-gray-50 bg-red-700 rounded-2xl py-4">
                                    {`${value}`}
                                </li>
                            </ul>
                        </div>
                    );
                })
            :
                null
            }

            <div className="w-4/5 m-auto text-left">
                <div className="py-15">
                    <h1 className="text-6xl">
                        Update Post
                    </h1>
                </div>
            </div>

            <div className="w-4/5 m-auto pt-20">
                <form onSubmit={submit}>

                    <input 
                        type="text" value={data.title} onChange={e => setData('title', e.target.value)}
                        className="bg-transparent block border-b-2 w-full h-20 text-6xl outline-none"/>

                    <textarea 
                        className="py-20 bg-transparent block border-b-2 w-full h-60 text-xl outline-none"
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}></textarea> 

                    <button    
                        type="submit"
                        className="uppercase mt-15 bg-blue-500 text-gray-100 text-lg font-extrabold py-4 px-8 rounded-3xl">
                        Submit Post
                    </button>
                </form>
            </div>

            <Footer/>
        </>
    );
}