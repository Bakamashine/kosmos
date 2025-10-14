<?php

namespace App\Enums;

enum OrderStatus: string
{
    case New = "Новый";
    case Under_consideration = "В рассмотрении";
    case Success = "Принятый";
}

