import { Head, usePage } from "@inertiajs/react";
import React from "react";
import Layout from "../Layout";
import { Card, ListGroup } from "react-bootstrap";
import { VacancyPag } from "../../interface";
import VacancyCard from "../../components/VacancyCard";
import Paginate from "../../components/ui/Paginate";
import NotFoundRecords from "../../components/ui/NotFoundRecords";

export default function Vakancy() {
    const {  vacancy } = usePage<{ vacancy: VacancyPag }>().props;

    const title = "Вакансии";
    return (
        <Layout>
            <Head title={title} />
            <h1 className="text-center">{title}</h1>
            <div className="">
                {vacancy && vacancy.data.length > 0 ? (
                    <div>
                        <div className="news">
                            {vacancy.data.map((item, index) => (
                                <VacancyCard
                                    key={index}
                                    description={item.description}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    payment={item.payment}
                                />
                            ))}
                        </div>
                        {vacancy.data.length > 5 && (
                            <div className="d-flex justify-content-center">
                                <Paginate item={vacancy} />
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
