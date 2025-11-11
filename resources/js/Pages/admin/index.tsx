import React, { FormEvent } from "react";
import Layout from "../Layout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import UpdateOrder from "../../components/order/updateStatus";

export default function Admin() {
    return (
        <Layout>
            <Head title="Административная страница" />
            <h1 className="text-center">
                Добро пожаловать на административную страницу
            </h1>
            <div className="updateOrder">
                <UpdateOrder />
            </div>
            <Link href={route("order.indexMobile")} className="btn btn-dark mobile">Обновление статуса заявок</Link>
            <Link href={route("news.index")} className="btn btn-dark">
                Управление новостями
            </Link>
            <Link href={route("flying.index")} className="btn btn-dark">
                Управление полётами
            </Link>
            <Link href={route("user.index")} className="btn btn-dark">
                Управление пользователями
            </Link>
        </Layout>
    );
}
