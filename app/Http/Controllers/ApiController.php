<?php

namespace App\Http\Controllers;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Http\Request;
use Storage;

class ApiController extends Controller
{

    public function __construct(
        #[Storage('public')] protected Filesystem $storage
    ) {}

    public function info()
    {
        return response()->json([
            "Информация об компании '" . env("APP_NAME") . "'",
            "Информация о вакансиях",
            "Информация в слайдере",
            "Отзывы пользователей",
            "Информация в футере",
            "Отклики на вакансии от пользователей"
        ]);
    }

    public function navigate()
    {
        return response()->json([
            "Главная",
            "Вакансии",
            "Отзывы",
            "Заявки",
            "Личный кабинет",
            "Карта сайта"
        ]);
    }

    public function commerce()
    {
        return response()->json([
            "Оставление заявки на вакансию",
            "Отправка заявки на полёт",
            "Добавление отзыва"
        ]);
    }

    public function some()
    {
        return response()->json([
            "Компания '" . env("APP_NAME") . "'"
        ]);
    }

    public function concurents()
    {
        return response()->json([
            "https://masterskaya-talantov.ru/neobyatnyj-kosmos",
            "https://mdou66norilsk.gosuslugi.ru/nash-detskiy-sad/novosti-i-sobytiya/neobyatnyy-kosmos.html",
            "https://games.andryushkin.ru/ds_quiz/kosmos"
        ]);
    }

    public function sitemap() {
        return $this->storage->get('sitemap.xml');
    }
}
