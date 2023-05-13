import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Layout(){
    const {auth} = usePage().props;

    function handleLogout(e){
        e.preventDefault();
        Inertia.post('/logout');
    }

    return(
        <header className="bg-gray-800 py-6">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div>
                    <Link href="/" className="text-lg font-semibold text-gray-100 no-underline">
                        Laravel
                    </Link>
                </div>
                <nav className="space-x-4 text-gray-300 text-sm sm:text-base">
                    <Link className="no-underline hover:underline" href="/">Home</Link>
                    <Link className="no-underline hover:underline" href="/blog">Blog</Link>
                    {auth.user === null ?
                        <>
                            <Link className="no-underline hover:underline" href="/login">Login</Link>
                            <Link className="no-underline hover:underline" href="/register">Register</Link>
                        </>
                    :
                        <>          
                            <span>{auth.user.name}</span>

                            <Link onClick={handleLogout}>Logout</Link>
                        </>
                    }
                </nav>
            </div>
        </header>
    );
}