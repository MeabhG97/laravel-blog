import React from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Layout(){
    const {auth} = usePage().props;

    const {post} = useForm();

    function handleLogout(e){
        e.preventDefault();
        Inertia.post('/logout');
    }

    return(
        <header className="bg-gray-800 py-6">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div>
                    <a href="/" className="text-lg font-semibold text-gray-100 no-underline">
                        Laravel
                    </a>
                </div>
                <nav className="space-x-4 text-gray-300 text-sm sm:text-base">
                    <a className="no-underline hover:underline" href="/">Home</a>
                    <Link className="no-underline hover:underline" href="/blog">Blog</Link>
                    {auth.user === null ?
                        <>
                            <a className="no-underline hover:underline" href="/login">Login</a>
                            <a className="no-underline hover:underline" href="/register">Register</a>
                        </>
                    :
                        <>          
                            <span>{auth.user.name}</span>

                            <a onClick={handleLogout}>Logout</a>
                        </>
                    }
                </nav>
            </div>
        </header>
    );
}