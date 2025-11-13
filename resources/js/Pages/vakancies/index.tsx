import { Head, usePage } from "@inertiajs/react";
import React from "react";
import Layout from "../Layout";
import { Card, ListGroup } from "react-bootstrap";
import { VakanciesPag } from "../../interface";
import VakanciesCard from "../../components/VakanciesCard";
import Paginate from "../../components/ui/Paginate";
import NotFoundRecords from "../../components/ui/NotFoundRecords";

export default function Vakancies() {
    const { vakancies } = usePage<{ vakancies: VakanciesPag }>().props;

    const title = "Вакансии";
    return (
        <Layout>
            <Head title={title} />
            <h1 className="text-center">{title}</h1>
            <div className="">
                {vakancies && vakancies.data.length > 0 ? (
                    <div>
                        <div className="news">
                            {vakancies.data.map((item, index) => (
                                <VakanciesCard
                                    key={index}
                                    description={item.description}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    payment={item.payment}
                                />
                            ))}
                        </div>
                        {vakancies.data.length > 5 && (
                            <div className="d-flex justify-content-center">
                                <Paginate item={vakancies} />
                            </div>
                        )}
                    </div>
                ) : (
                    <NotFoundRecords text="Вакансии не найдены" />
                )}
            </div>
        </Layout>
    );
}
