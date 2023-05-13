<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PagesController extends Controller
{
    public function index()
    {
        return Inertia::render('Index')
            ->with('posts', Post::orderby('updated_at', 'DESC')->get());
    }
}
