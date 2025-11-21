<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function info()
    {
        return response()->json([
            "Информация об компании 'Необъятный космос'",
            "Информация о вакансиях",
            "Информация в слайдере",
            "Отзывы пользователей",
            "Информация в футере",
            "Отклики на вакансии от пользователей"
        ]);
    }

    public function navigate() {
        return response()->json([
            "Главная",
            "Вакансии",
            "Отзывы",
            "Заявки",
            "Личный кабинет",
            "Карта сайта"
        ]);
    }

    public function commerce() {
        return response()->json([
            "Оставление заявки на вакансию",
            "Отправка заявки на полёт",
            "Добавление отзыва"
        ]);
    }

    public function some() {
        return response()->json([
            "Компания 'Необъятный космос'"
        ]);
    }
}
