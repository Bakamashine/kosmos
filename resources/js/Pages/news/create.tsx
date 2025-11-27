import { Head, router, useForm, usePage } from "@inertiajs/react";
import Layout from "../Layout";
import { Button, Form } from "react-bootstrap";
import { ChangeEvent, FormEvent, useState } from "react";
import { News } from "../../interface";
import NewsForm from "../../forms/NewsForm";
import { HttpMethod } from "../../helper/enum";

export default function CreateNews() {
    const { data, setData, post, errors } = useForm({
        title: "",
        description: "",
    });

    const title = "Создание новости";

    return (
        <Layout title={title} title_h1>

            <NewsForm method={HttpMethod.POST} url={"/news"} />
        </Layout>
    );
}
