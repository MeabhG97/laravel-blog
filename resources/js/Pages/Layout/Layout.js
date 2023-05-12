import React from "react";
import { usePage } from "@inertiajs/inertia-react";

export default function Layout(){
    const {auth} = usePage().props;

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
                    <a className="no-underline hover:underline" href="/blog">Blog</a>
                    {auth.user === null ?
                        <>
                            <a className="no-underline hover:underline" href="/login">Login</a>
                            <a className="no-underline hover:underline" href="/register">Register</a>
                        </>
                    :
                        <>          
                            <span>{auth.user.name}</span>

                            <a href="/logout"
                                className="no-underline hover:underline"
                                onClick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">Logout</a>
                            <form id="logout-form" action="/logout" method="POST" className="hidden">
                            </form>
                        </>
                    }
                </nav>
            </div>
        </header>
    );
}