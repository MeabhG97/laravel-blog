import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { usePage, useForm } from "@inertiajs/inertia-react";

import Layout from "../Layout/Layout";
import Footer from "../Layout/Footer";

export default function Register(){
    const {errors} = usePage().props;

    const {data, setData, post} = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    function submit(e){
        e.preventDefault();
        post('/register');
    }

    return(
        <>
            <Layout/>
            <main className="sm:container sm:mx-auto sm:max-w-lg sm:mt-10">
                <div className="flex">
                    <div className="w-full">
                        <section className="flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-sm sm:shadow-lg">

                            <header className="font-semibold bg-gray-200 text-gray-700 py-5 px-6 sm:py-6 sm:px-8 sm:rounded-t-md">
                                Register Inertia
                            </header>

                            <form className="w-full px-6 space-y-6 sm:px-10 sm:space-y-8" onSubmit={submit}>

                                <div className="flex flex-wrap">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
                                        Name:
                                    </label>

                                    <input id="name" type="text" 
                                        className={`form-input w-full ${Object.keys(errors).includes('name') ? "border-red-500" : ""}`}
                                        name="name" value={data.name} required autoComplete="name" autoFocus 
                                        onChange={e => setData('name', e.target.value)}/>

                                    {Object.keys(errors).includes('name') ?
                                        <p className="text-red-500 text-xs italic mt-4">
                                            {errors.name}
                                        </p>
                                    :
                                        null
                                    }
                                </div>

                                <div className="flex flex-wrap">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
                                        Email:
                                    </label>

                                    <input id="email" type="email"
                                        className={`form-input w-full ${Object.keys(errors).includes('email') ? "border-red-500" : ""}`}  
                                        name="email" value={data.email} required autoComplete="email" 
                                        onChange={e => setData('email', e.target.value)}/>

                                    {Object.keys(errors).includes('email') ?
                                        <p className="text-red-500 text-xs italic mt-4">
                                            {errors.email}
                                        </p>
                                    :
                                        null
                                    }
                                </div>

                                <div className="flex flex-wrap">
                                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
                                        Password:
                                    </label>

                                    <input id="password" type="password"
                                        className={`form-input w-full ${Object.keys(errors).includes('password') ? "border-red-500" : ""}`}
                                        name="password" required autoComplete="new-password" value={data.password} 
                                        onChange={e => setData('password', e.target.value)}/>

                                    {Object.keys(errors).includes('password') ?
                                        <p className="text-red-500 text-xs italic mt-4">
                                            {errors.password}
                                        </p>
                                    :
                                        null
                                    }   
                                </div>

                                <div className="flex flex-wrap">
                                    <label htmlFor="password-confirm" className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
                                       Confirm Password:
                                    </label>

                                    <input id="password-confirm" type="password" className="form-input w-full"
                                        name="password_confirmation" required autoComplete="new-password" value={data.password_confirmation}
                                        onChange={e => setData('password_confirmation', e.target.value)}/>
                                </div>

                                <div className="flex flex-wrap">
                                    <button type="submit"
                                        className="w-full select-none font-bold whitespace-no-wrap p-3 rounded-lg text-base leading-normal no-underline text-gray-100 bg-blue-500 hover:bg-blue-700 sm:py-4">
                                        Register
                                    </button>

                                    <p className="w-full text-xs text-center text-gray-700 my-6 sm:text-sm sm:my-8">
                                        Already have an account?
                                        <Link className="text-blue-500 hover:text-blue-700 no-underline hover:underline" href="/login">
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </form>

                        </section>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
}