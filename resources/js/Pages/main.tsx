import React from "react";
import Layout from "./Layout";
import { Carousel } from "react-bootstrap";
import UncontrolledCarousel from "../components/Carousel";
import { Head, usePage } from "@inertiajs/react";
import NewsCard from "../components/NewsCard";
import { News, NewsPag } from "../interface";
import NotFoundRecords from "../components/NotFoundRecords";
import Paginate from "../components/Paginate";
export default function Main() {
    const { props } = usePage();

    const news = props.news as NewsPag;
    console.log(news);

    return (
        <Layout>
            <Head title="Главная" />
            <h1 className="text-center p-2">Главная страница</h1>
            <div className="m-3">
                <UncontrolledCarousel />
            </div>

            {news !== undefined ? (
                <div className="">
                    <h3 className="text-center">Наши новости</h3>
                    <div className="d-flex flex-wrap justify-content-between">
                        {news.data.map((item, index) => (
                            <NewsCard
                                key={index}
                                id={item.id}
                                title={item.title}
                                description={item.description}
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
        </Layout>
    );
}
