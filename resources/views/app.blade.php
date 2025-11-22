<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="/img/rocket.png" type="image/png">
	<meta name="keywords" content="Необъятный космос, космос, билеты в космос, вакансии астронавта, работа космонавтом, новости необъятный космос, вакансии необъятный космос, сделать заявку необъятный космос">
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function(m, e, t, r, i, k, a) {
            m[i] = m[i] || function() {
                (m[i].a = m[i].a || []).push(arguments)
            };
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) {
                    return;
                }
            }
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(
                k, a)
        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=105365636', 'ym');

        ym(105365636, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: "dataLayer",
            accurateTrackBounce: true,
            trackLinks: true
        });
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/105365636" style="position:absolute; left:-9999px;" alt="" />
        </div>
    </noscript>
    <!-- /Yandex.Metrika counter -->



    @viteReactRefresh
    @vite(['resources/js/app.tsx', 'resources/css/app.css', 'resources/css/main.css', 'resources/js/bootstrap.js'])
    @inertiaHead
    @routes
</head>

<body>
    @inertia
</body>

</html>
