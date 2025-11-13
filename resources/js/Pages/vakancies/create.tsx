import React from "react";
import Layout from "../Layout";
import VakanciesForm from "../../forms/VakanciesForm";
import { HttpMethod } from "../../helper/enum";
import { route } from "ziggy-js";
import { Head } from "@inertiajs/react";
export default function CreateVakancies() {
    const title = "Создание вакансии";
    return (
        <Layout>
            <Head title={title} />
            <h1 className="text-center">{title}</h1>
            <VakanciesForm
                method={HttpMethod.POST}
                url={route("vakancies.store")}
            />
        </Layout>
    );
}
