@extends('layouts.app')

@section('content')
    <div class="background-image grid grid-cols-1 m-auto">
        <div class="flex text-gray-100 pt-10">
            <div class="title-text-holder m-auto pt-4 pb-8 pl-2 pr-2 sm:m-auto w-4/5 block text-center">
                <h1 class="sm:text-white text-5xl uppercase font-bold text-shadow-md pb-14">
                    READY TO JUMP INTO ENGAGING PROGRAMMING DISCUSSIONS?
                </h1>
                <a 
                    href="/blog"
                    class="text-center bg-gray-50 text-gray-700 py-2 px-4 font-bold text-xl">
                    Click Here!
                </a>
            </div>
        </div>
    </div>

    <div class="text-center p-15 bg-black text-white">
        <h2 class="text-2xl pb-5 text-l"> 
            We support these resources, that let you learn...
        </h2>

        <a href="https://www.w3schools.com/php/" target="_blank" class="font-extrabold block text-4xl py-1">
            PHP
        </a>
        <a href="https://www.w3schools.com/java/" target="_blank" class="font-extrabold block text-4xl py-1">
            Java
        </a>
        <a href="https://cplusplus.com/doc/tutorial/" target="_blank" class="font-extrabold block text-4xl py-1">
            C++
        </a>
        <a href="https://docs.python.org/3/tutorial/index.html" target="_blank" class="font-extrabold block text-4xl py-1">
            Python
        </a>
    </div>

    <div class="text-center py-15">

        <h2 class="text-4xl font-bold py-10">
            Recent Posts
        </h2>

        <p class="m-auto w-4/5 text-gray-500">
            Here are some of the most recent posts from our vibrant community!
        </p>
    </div>

    <div class="sm:grid grid-cols-2 w-4/5 m-auto">
        <div class="flex bg-yellow-700 text-gray-100 pt-10">
            <div class="m-auto pt-4 pb-16 sm:m-auto w-4/5 block">
                <span class="uppercase text-xs">
                    Post title
                </span>

                <h3 class="text-xl font-bold py-10">
                    Post description (no >250)
                </h3>

                <a 
                    href=""
                    class="uppercase bg-transparent border-2 border-gray-100 text-gray-100 text-xs font-extrabold py-3 px-5 rounded-3xl">
                    Read more
                </a>
            </div>
        </div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2014/05/03/01/03/laptop-336704_960_720.jpg" alt="">
        </div>
    </div>
@endsection