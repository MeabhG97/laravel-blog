<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    
    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body class="bg-gray-100 h-screen antialiased leading-none font-sans">
    <div id="app">

            <!--Navbar sample code retrieved from https://codepen.io/chris__sev/pen/QWGjQKe?editors=1010-->

        <!-- navbar goes here -->
        <nav class="bg-gray-100">
            <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
        
                <div class="flex space-x-4">
                    <!-- primary nav -->
                <div class="hidden md:flex items-center space-x-1">
                    <a href="/" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a>
                    <a href="/blog" class="py-5 px-3 text-gray-700 hover:text-gray-900">Blog</a>
                </div>
                </div>
        
                <!-- secondary nav -->
                <div class="hidden md:flex items-center space-x-1">
                    @guest
                                <a class="py-5 px-3" href="{{ route('login') }}">{{ __('Login') }}</a>
                                @if (Route::has('register'))
                                    <a class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300" href="{{ route('register') }}">{{ __('Register') }}</a>
                                @endif
                            @else
                                <span>{{ Auth::user()->name }}</span>

                                <a href="{{ route('logout') }}"
                                class="py-5 px-3"
                                onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="hidden">
                                    {{ csrf_field() }}
                                </form>
                            @endguest
                </div>
        
                <!-- mobile button goes here -->
                <div class="md:hidden flex items-center">
                <button class="mobile-menu-button">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                </div>
        
            </div>
            </div>
        
            <!-- mobile menu -->
            <div class="mobile-menu hidden md:hidden">
            <a href="/" class="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
            <a href="/blog" class="block py-2 px-4 text-sm hover:bg-gray-200">Blog</a>

            @guest
                                <a class="block py-2 px-4 text-sm hover:bg-gray-200" href="{{ route('login') }}">{{ __('Login') }}</a>
                                @if (Route::has('register'))
                                    <a class="block py-2 px-4 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 transition duration-300" href="{{ route('register') }}">{{ __('Register') }}</a>
                                @endif
                            @else
                                <span class="block py-2 px-4 text-sm hover:bg-gray-200">{{ Auth::user()->name }}</span>

                                <a href="{{ route('logout') }}"
                                class="block py-2 px-4 text-sm hover:bg-gray-200"
                                onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="hidden">
                                    {{ csrf_field() }}
                                </form>
                            @endguest

            </div>
        </nav>
        
        <div>
            @yield('content')
        </div>

        <div>
            @include('layouts.footer')
        </div>
    </div>
    <script>
        // grab everything we need
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        // add event listeners
        btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        });
    </script>

</body>
</html>
