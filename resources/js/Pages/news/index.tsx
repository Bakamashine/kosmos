import React from "react";
import Layout from "../Layout";
import { Head, Link, usePage } from "@inertiajs/react";
import { NewsPag } from "../../interface";
import { route } from "ziggy-js";
import NewsCard from "../../components/NewsCard";
import Paginate from "../../components/ui/Paginate";
import NotFoundRecords from "../../components/ui/NotFoundRecords";
export default function ManagementNews() {
    const { props } = usePage();
    const news = props?.news as NewsPag;
    // console.log(news);
    return (
        <Layout title="Управление новостями" title_h1 >
            <div className="text-center">
                {news !== undefined && news.data.length > 0 ? (
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
