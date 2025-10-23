import React, { FormEvent } from "react";
import Layout from "../Layout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import UpdateOrder from "../order/update_status";

export default function Admin() {
    return (
        <Layout>
            <Head title="Административная страница" />
            <h1 className="text-center">
                Добро пожаловать на административную страницу
            </h1>
            <div>
                <UpdateOrder />
            </div>
            <Link href={route("news")} className="btn btn-dark">
                Управление новостями
            </Link>
            <Link href={route("flying.index")} className="btn btn-dark">
                Управление полётами
            </Link>
        </Layout>
    );
}
