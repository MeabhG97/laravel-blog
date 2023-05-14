import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Layout(){
    const {auth, request} = usePage().props;

    function handleLogout(e){
        e.preventDefault();
        Inertia.post('/logout');
    }

    function toggleHidden(){
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");
    }

    return(
        <nav class="bg-gray-800">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">
            
                    <div class="flex space-x-4">
                        <div className="hidden md:flex items-center space-x-1">
                            <Link className={`py-5 px-3 text-white hover:text-gray-500 ${request === "/" ? "text-blue-500" : ""}`} href="/">Home</Link>
                            <Link className={`py-5 px-3 text-white hover:text-gray-500 ${request.startsWith("blog") ? "text-blue-500" : ""}`} href="/blog">Blog</Link>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        {auth.user === null ?
                            <>
                                <Link className={`py-5 px-3 text-white hover:text-gray-500 ${request === "login" ? "text-blue-500" : ""}`} href="/login">Login</Link>
                                <Link className={`py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-white hover:text-gray-500 rounded transition duration-300 ${request === "register" ? "text-blue-500" : ""}`} href="/register">Register</Link>
                            </>
                        :
                            <>          
                                <span className="block py-2 px-4 text-yellow-400">{auth.user.name}</span>

                                <Link className={`py-5 px-3 text-white hover:text-gray-500 ${request === "logout" ? "text-blue-500" : ""}`} onClick={handleLogout}>Logout</Link>
                            </>
                        }
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" type="button" onClick={toggleHidden}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    </div>

                    <div className="mobile-menu hidden md:hidden">
                        <Link className={`block py-5 px-3 text-white hover:text-gray-500 ${request === "/" ? "text-blue-500" : ""}`} href="/">Home</Link>
                        <Link className={`block py-5 px-3 text-white hover:text-gray-500 ${request.startsWith("blog") ? "text-blue-500" : ""}`} href="/blog">Blog</Link>

                        {auth.user === null ?
                            <>
                                <Link className={`block py-5 px-3 text-white hover:text-gray-500 ${request === "login" ? "text-blue-500" : ""}`} href="/login">Login</Link>
                                <Link className={`block py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-white hover:text-gray-500 rounded transition duration-300 ${request === "register" ? "text-blue-500" : ""}`} href="/register">Register</Link>
                            </>
                        :
                            <>          
                                <span className="block py-2 px-4 text-yellow-400">{auth.user.name}</span>

                                <Link className={`block py-5 px-3 text-white hover:text-gray-500 ${request === "logout" ? "text-blue-500" : ""}`} onClick={handleLogout}>Logout</Link>
                            </>
                        }
                    </div>
            </div>
        </nav>
    );
}