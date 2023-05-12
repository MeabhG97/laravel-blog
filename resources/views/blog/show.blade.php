@extends('layouts.app')

@section('content')
<div class="w-4/5 m-auto text-left">
    <div class="py-15">
        <h1 class="text-6xl">
            {{ $post->title }}
        </h1>
    </div>
</div>

<div class="w-4/5 m-auto pt-20">
    <span class="text-gray-500">
        By <span class="font-bold italic text-gray-800">{{ $post->user->name }}</span>, Created on {{ date('jS M Y', strtotime($post->updated_at)) }}
    </span>

    <p class="text-xl text-gray-700 pt-8 pb-10 leading-8 font-light">
        {{ $post->description }}
    </p>
    <div>
        <p>Comments</p>
        <form 
        action="/comment"
        method="POST"
        enctype="multipart/form-data">
        @csrf
        <input class="hidden" name="post_id" value="{{ $post->id }}">
        <input class="hidden" name="post_slug" value="{{ $post->slug }}">
        <textarea 
            name="message"
            placeholder="Message..."
            class="py-10 bg-transparent block border-b-2 w-full h-30 text-xl outline-none"></textarea>

        <button    
            type="submit"
            class="uppercase mt-15 bg-blue-500 text-gray-100 text-lg font-extrabold py-4 px-8 rounded-3xl">
            Submit Comment
        </button>
    </form>
    @php
        foreach ($comments as $comment) {
            echo '<div class="commentBox"';
                echo '<div class="commentInfo">';
                    echo "<p>$comment->name</p>";
                    echo "<p>" . date('d-m-y H:i', strtotime($comment->created_at)) . "</p>";
                echo '</div>';
                echo '<div class="commentMessage">';
                    echo "<p>$comment->message</p>";
                echo '</div>';
            echo '</div>';

            if (isset(Auth::user()->id) && Auth::user()->id == $post->user_id) {
                echo '
                <span class="float-right">
                     <form 
                        action="/comment/' . $comment->id .'"
                        method="DELETE">

                        <button
                            class="text-red-500 pr-3"
                            type="submit">
                            Delete
                        </button>

                    </form>
                </span>';
            }

        }
        
    @endphp
    </div>

</div>

@endsection 