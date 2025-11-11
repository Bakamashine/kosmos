<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="/img/rocket.png" type="image/png">
    @viteReactRefresh
    @vite(['resources/js/app.tsx', 'resources/css/app.css', 'resources/css/main.css', 'resources/js/bootstrap.js'])
    @inertiaHead
    @routes
</head>

<body>
    @inertia
</body>

</html>
