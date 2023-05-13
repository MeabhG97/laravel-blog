import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";

import Layout from "../Layout/Layout";
import Footer from "../Layout/Footer";

export default function Create(){
    const {errors} = usePage().props;

    const {data, setData, post} = useForm({
        title: "",
        description: "",
        image: ""
    });

    function submit(e){
        e.preventDefault();
        post('/blog');
    }

    return(
        <>
            <Layout/>
            <div className="w-4/5 m-auto text-left">
                <div className="py-15">
                    <h1 className="text-6xl">
                        Create Post
                    </h1>
                </div>
            </div>

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
                
            <div className="w-4/5 m-auto pt-20">
                <form onSubmit={submit}> 
                    <input type="text" placeholder="Title..." value={data.title} 
                        onChange={e => setData('title', e.target.value)}
                        className="bg-transparent block border-b-2 w-full h-20 text-6xl outline-none"/>

                    <textarea placeholder="Description..." value={data.description} 
                        onChange={e => setData('description', e.target.value)}
                        className="py-20 bg-transparent block border-b-2 w-full h-60 text-xl outline-none"></textarea>

                    <div className="bg-grey-lighter pt-15">
                        <label className="w-44 flex flex-col items-center px-2 py-3 bg-white-rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                            <span className="mt-2 text-base leading-normal">
                                Select a file
                            </span>
                            <input type="file" onChange={e => setData('image', e.target.files[0])}
                                className="hidden"/>
                        </label>
                    </div>

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