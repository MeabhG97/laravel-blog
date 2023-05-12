<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PagesController extends Controller
{
    public function index()
    {
        return view('index')->with('posts', DB::select('select * from posts order by created_at desc limit 4'));
    }
}
