import { Head, router, useForm, usePage } from "@inertiajs/react";
import Layout from "../Layout";
import { Button, Form } from "react-bootstrap";
import { ChangeEvent, FormEvent, useState } from "react";
import { News } from "../../interface";
import { route } from "ziggy-js";
import NewsForm from "../../forms/NewsForm";
import { HttpMethod } from "../../helper/enum";

export default function CreateNews() {
    const { data, setData, post, errors } = useForm({
        title: "",
        description: "",
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("news.store"));
    }

    const title = "Создание новости";

    return (
        <Layout>
            <Head title={title} />
            <h5 className="text-center">{title}</h5>

            <NewsForm method={HttpMethod.POST} url={route("news.store")} />
        </Layout>
    );
}
