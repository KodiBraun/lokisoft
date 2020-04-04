@extends('layouts.app')

@section('content')

    <div class="container text-center">
        <h2>Подтвердите почту</h2>

        <form action="{{ route('SendEmail', $user) }}" class="" method="post">
            @csrf
            <input type="hidden" value="{{ $user->email }}" class="" name="email">
            <input type="submit" class="btn btn-primary" value="Подтвердить почту">
        </form>

        {{ $user->email }}
    </div>

@endsection
