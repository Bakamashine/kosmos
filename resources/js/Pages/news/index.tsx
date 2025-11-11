import React from "react";
import Layout from "../Layout";
import { Head, Link, usePage } from "@inertiajs/react";
import { NewsPag } from "../../interface";
import { route } from "ziggy-js";
import NewsCard from "../../components/NewsCard";
import Paginate from "../../components/Paginate";
import NotFoundRecords from "../../components/NotFoundRecords";
export default function ManagementNews() {
    const { props } = usePage();
    const news = props?.news as NewsPag;
    console.log(news);
    return (
        <Layout>
            <Head title="Управление новостями" />
            <div className="text-center">
                <h1>Управление новостями</h1>

                {news !== undefined ? (
                    <div>
                        <div className="news">
                            {news.data.map((item, index) => (
                                <NewsCard
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    redact={true}
                                />
                            ))}
                        </div>
                        <div className="d-flex justify-content-center">
                            <Paginate item={news} />
                        </div>
                    </div>
                ) : (
                    <NotFoundRecords text="Новостей нет" />
                )}

                <div className="">
                    <Link className="btn btn-dark" href={route("news.create")}>
                        Создание новости
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
