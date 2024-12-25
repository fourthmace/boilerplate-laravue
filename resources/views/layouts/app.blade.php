<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <?php if(env('APP_ENV') == 'production'){ ?>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <?php } ?>

        @vite(['resources/css/app.css', 'resources/ts/app.ts'])
    </head>
    <body>
        <div id="app">
            @yield('app_content')
        </div>
    </body>
</html>
