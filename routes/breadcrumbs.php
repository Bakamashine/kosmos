<?php

use Diglactic\Breadcrumbs\Breadcrumbs;

use Diglactic\Breadcrumbs\Generator as Trail;

// Breadcrumbs::for("/", function (BreadcrumbTrail $trail) {
// $trail->push("Home", route('home'));
// $trail->push("Admin", route("admin"));
// $trail->push("Login", route("login"));
// $trail->push("Register", route("register"));
// $trail->push("Main", route("main"));
// });

// Breadcrumbs::for("admin", function () {

// });

// Breadcrumbs::for("main", function (BreadcrumbTrail $trail) {
//     $trail->push("Login", route("login"));
//     $trail->push("Register", route("register"));
// });
// Breadcrumbs::for("admin", function (BreadcrumbTrail $trail) {
//     $trail->parent("main");
// });

// Breadcrumbs::for("news", function (BreadcrumbTrail $trail) {
//     $trail->parent("admin");
//     $trail->push("News", route("news.index"));
//     $trail->push("Create", route("news.create"));
//     $trail->push("Edit", route("news.edit"));
// });


/*
|--------------------------------------------------------------------------
| Main & Static
|--------------------------------------------------------------------------
*/

Breadcrumbs::for('main', function (Trail $trail) {
    $trail->push('Главная', route('main'));
});
Breadcrumbs::for("admin", function (Trail $trail) {
    $trail->push("Админ", route("admin"));
});

Breadcrumbs::for('about_us', function (Trail $trail) {
    $trail->parent('main');
    $trail->push('О нас', route('about_us'));
});

Breadcrumbs::for('feedback.index', function (Trail $trail) {
    $trail->parent('main');
    $trail->push('Отзывы', route('feedback.index'));
});

Breadcrumbs::for('vakancies.index', function (Trail $trail) {
    $trail->parent('main');
    $trail->push('Вакансии', route('vakancies.index'));
});

/*
|--------------------------------------------------------------------------
| Auth
|--------------------------------------------------------------------------
*/
Breadcrumbs::for('login', function (Trail $trail) {
    $trail->parent('main');
    $trail->push('Вход', route('login'));
});

Breadcrumbs::for('register', function (Trail $trail) {
    $trail->parent('main');
    $trail->push('Регистрация', route('register'));
});

/*
|--------------------------------------------------------------------------
| Home
|--------------------------------------------------------------------------
*/
Breadcrumbs::for('home', function (Trail $trail) {
    $trail->parent('main');
    $trail->push('Личный кабинет', route('home'));
});

/*
|--------------------------------------------------------------------------
| News
|--------------------------------------------------------------------------
*/

Breadcrumbs::for('news.index', function (Trail $trail) {
    $trail->parent('admin');
    $trail->push('Новости', route('news.index'));
});

Breadcrumbs::for('news.create', function (Trail $trail) {
    $trail->parent('news.index');
    $trail->push('Создать новость', route('news.create'));
});

Breadcrumbs::for('news.edit', function (Trail $trail, $news) {
    $trail->parent('news.index');
    $trail->push('Редактировать: ' . $news->title, route('news.edit', $news));
});

Breadcrumbs::for('news.show', function (Trail $trail, $news) {
    $trail->parent('main');
    $trail->push('Новости', route('news.index'));
    $trail->push($news->title, route('news.show', $news));
});

/*
|--------------------------------------------------------------------------
| Users (Admin)
|--------------------------------------------------------------------------
*/

Breadcrumbs::for('user.index', function (Trail $trail) {
    $trail->parent('admin');
    $trail->push('Пользователи', route('user.index'));
});

Breadcrumbs::for('user.create', function (Trail $trail) {
    $trail->parent('user.index');
    $trail->push('Создать', route('user.create'));
});

Breadcrumbs::for('user.edit', function (Trail $trail, $user) {
    $trail->parent('user.index');
    $trail->push('Редактировать: ' . $user->name, route('user.edit', $user));
});

Breadcrumbs::for('user.show', function (Trail $trail, $user) {
    $trail->parent('user.index');
    $trail->push($user->name, route('user.show', $user));
});

/*
|--------------------------------------------------------------------------
| Vacancies (Admin)
|--------------------------------------------------------------------------
*/

Breadcrumbs::for('vacancy.index', function (Trail $trail) {
    $trail->parent('main');
    $trail->push('Вакансии', route('vacancy.index'));
});

Breadcrumbs::for('vacancy.management', function (Trail $trail) {
    $trail->parent('admin');
    $trail->push('Вакансии (Управление)', route('vacancy.management'));
});

Breadcrumbs::for('vacancy.create', function (Trail $trail) {
    $trail->parent('vacancy.management');
    $trail->push('Создать вакансию', route('vacancy.create'));
});

Breadcrumbs::for('vacancy.edit', function (Trail $trail, $vacancy) {
    $trail->parent('vacancy.management');
    $trail->push('Редактировать: ' . $vacancy->title, route('vacancy.edit', $vacancy));
});

Breadcrumbs::for('vacancy.show', function (Trail $trail, $vacancy) {
    $trail->parent('vacancy.management');
    $trail->push($vacancy->title, route('vacancy.show', $vacancy));
});

Breadcrumbs::for("vacancy.destroyed", function (Trail $trail) {
    $trail->parent("vacancy.management");
    $trail->push("Удалённые", route("vacancy.destroyed"));
});

/*
|--------------------------------------------------------------------------
| Flying (Resource)
|--------------------------------------------------------------------------
*/

Breadcrumbs::for('flying.index', function (Trail $trail) {
    $trail->parent('admin');
    $trail->push('Полеты', route('flying.index'));
});

Breadcrumbs::for('flying.create', function (Trail $trail) {
    $trail->parent('flying.index');
    $trail->push('Создать запись', route('flying.create'));
});

Breadcrumbs::for('flying.edit', function (Trail $trail, $flying) {
    $trail->parent('flying.index');
    $trail->push('Редактировать', route('flying.edit', $flying));
});

Breadcrumbs::for('flying.show', function (Trail $trail, $flying) {
    $trail->parent('flying.index');
    $trail->push('Просмотр', route('flying.show', $flying));
});

/*
|--------------------------------------------------------------------------
| Otclice
|--------------------------------------------------------------------------
*/

Breadcrumbs::for('otclice.index', function (Trail $trail) {
    $trail->parent('admin');
    $trail->push('Отклики', route('otclice.index'));
});

Breadcrumbs::for('otclice.create', function (Trail $trail, $vacancy) {
    $trail->parent('vacancy.show', $vacancy);
    $trail->push('Создать отклик', route('otclice.create', $vacancy));
});


Breadcrumbs::for('otclice.update', function (Trail $trail, $otclice) {
    $trail->parent('otclice.index');
    $trail->push('Редактировать', route('otclice.update', $otclice));
});
