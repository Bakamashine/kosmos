import React from "react";
import Layout from "./Layout";
import { Carousel } from "react-bootstrap";
import UncontrolledCarousel from "../components/ui/Carousel";
import { Head, usePage } from "@inertiajs/react";
import NewsCard from "../components/NewsCard";
import { News, NewsPag } from "../interface";
import NotFoundRecords from "../components/ui/NotFoundRecords";
import Paginate from "../components/ui/Paginate";
import { GetSizeWindow } from "../helper/functions";
export default function Main() {
    const { props } = usePage();

    const news = props.news as NewsPag;
    // console.log(news);

    return (
        <Layout title="Главная" title_h1 title_h1_replace="Главная страница" meta="Билеты для путешествия в космос">
            <div className="carousel_size">
                <UncontrolledCarousel />
            </div>

            {news !== undefined && news.data.length > 0 ? (
                <div className="">
                    <h3 className="text-center">Наши новости</h3>
                    <div className="news">
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
