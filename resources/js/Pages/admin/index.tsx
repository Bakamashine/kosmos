import React, { FormEvent } from "react";
import Layout from "../Layout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import UpdateOrder from "../../components/order/updateStatus";

export default function Admin() {
    return (
        <Layout
            title="Административная страница"
            title_h1
            title_h1_replace="Добро пожаловать на административную страницу"
        >
            <div className="nomobile">
                <UpdateOrder />
            </div>
            <Link
                href={"/order/mobile"}
                className="btn btn-dark mobile"
            >
                Обновление статуса заявок
            </Link>
            <Link href={"/news"} className="btn btn-dark">
                Управление новостями
            </Link>
            <Link href={"/flying"} className="btn btn-dark">
                Управление полётами
            </Link>
            <Link href={"/user"} className="btn btn-dark nomobile">
                Управление пользователями
            </Link>
            <Link
                href={"/user/mobile"}
                className="btn btn-dark mobile"
            >
                Управление пользователями
            </Link>
            <Link href={"/vacancy/management"} className="btn btn-dark">
                Управление вакансиями
            </Link>
            <Link href={"/otclice"} className="btn btn-dark">
                Управление откликами
            </Link>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href={"/xml"}
                className="btn btn-dark"
            >
                Экспорт всех записей
            </a>
        </Layout>
    );
}
