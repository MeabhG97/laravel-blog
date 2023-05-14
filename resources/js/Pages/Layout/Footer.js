import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Footer(){
    return(
        <footer className="bg-gray-800 py-20 mt-20">
            <div className="sm:grid grid-cols-2 w-4/5 justify-evenly pb-10 m-auto border-b-2 border-gray-700">
                <div>
                    <h3 className="text-l sm:font-bold text-gray-100">
                        Pages
                    </h3>

                    <ul className="py-4 sm:text-s pt-4 text-gray-400">
                        <li className="pb-1">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className="pb-1">
                            <Link href="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="pb-1">
                            <Link href="/login">
                                Login
                            </Link>
                        </li>
                        <li className="pb-1">
                            <Link href="/register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-l sm:font-bold text-gray-100">
                        Find Us
                    </h3>

                    <ul className="py-4 sm:text-s pt-4 text-gray-400">
                        <li className="pb-1">
                            <Link href="/">
                                What we do
                            </Link>
                        </li>
                        <li className="pb-1">
                            <Link href="/">
                                Address
                            </Link>
                        </li>
                        <li className="pb-1">
                            <Link href="/">
                                Phone
                            </Link>
                        </li>
                        <li className="pb-1">
                            <Link href="/">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}
