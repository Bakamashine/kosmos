import React from "react";
import Layout from "../Layout";
import { Head, usePage } from "@inertiajs/react";
import { News } from "../../interface";
import NewsForm from "../../forms/NewsForm";
import { HttpMethod } from "../../helper/enum";
import { route } from "ziggy-js";

export default function EditNews() {
    const news = usePage().props.news as News;
    return (
        <Layout>
            <Head title={news.title} />

            <NewsForm
                title={news.title}
                description={news.description}
                method={HttpMethod.PUT}
                url={route("news.update", {news: news.id})}
            />
        </Layout>
    );
}
