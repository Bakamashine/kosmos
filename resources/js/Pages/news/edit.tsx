import React from "react";
import Layout from "../Layout";
import { Head, usePage } from "@inertiajs/react";
import { News } from "../../interface";
import NewsForm from "../../forms/NewsForm";
import { HttpMethod } from "../../helper/enum";

export default function EditNews() {
    const news = usePage().props.news as News;
    return (
        <Layout title={news.title}>

            <NewsForm
                title={news.title}
                description={news.description}
                method={HttpMethod.PUT}
                textbutton="Обновить новость"
                url={`/news/${news.id}`}
            />
        </Layout>
    );
}
