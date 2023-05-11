<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;


class CommentsController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'message' => 'required',
        ]);


        Comment::create([
            'message' => $request->input('message'),
            'user_id' => auth()->user()->id,
            'post_id' => $request->input('post_id')
        ]);

        return redirect('/blog/' . $request->input('post_slug'));
    }

    public function destroy($id, $slug)
    {
        $comment = Comment::where('id', $id);
        $comment->delete();

        
        return redirect('/blog/' . $slug);
    }
}
