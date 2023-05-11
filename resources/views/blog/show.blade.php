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
    @php
        foreach ($comments as $comment) {
            echo '<div class="commentBox"';
                echo '<div class="commentInfo">';
                    echo "<p>" . date('d-m-Y', strtotime($comment->created_at)) . "</p>";
                echo '</div>';
                echo '<div class="commentMessage">';
                    echo "<p>$comment->message</p>";
                echo '</div>';
            echo '</div>';
        
        }
    @endphp
</div>

@endsection 