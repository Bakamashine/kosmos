import { Head, Link, usePage } from "@inertiajs/react";
import { News } from "../../interface";
import Layout from "../Layout";
import { route } from "ziggy-js";

export default function ShowNews() {
    const { props } = usePage();
    const news = props.news as News;

    return (
        <Layout>
            <Head title={news.title} />
            <div className="text-center">
                <h1>{news.title}</h1>
                <p>{news.description}</p>
                <Link className="" href={route("main")}>
                    Назад
                </Link>
            </div>
        </Layout>
    );
}
