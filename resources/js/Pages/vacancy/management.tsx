import React from "react";
import Layout from "../Layout";
import { Head, Link, usePage } from "@inertiajs/react";
import { VacancyPag } from "../../interface";
import NotFoundRecords from "../../components/ui/NotFoundRecords";
import VacancyCard from "../../components/VacancyCard";
import Paginate from "../../components/ui/Paginate";
import { route } from "ziggy-js";
export default function VakanciesManagement() {
    const { vacancy } = usePage<{  vacancy: VacancyPag }>().props;
    const title = "Управление вакансиями";
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
                                    title={item.title}
                                    id={item.id}
                                    image={item.image}
                                    payment={item.payment}
                                />
                            ))}
                        </div>
                        <div className="d-flex justify-content-center">
                            <Paginate item={vacancy} />
                        </div>
                    </div>
                ) : (
                    <NotFoundRecords text="Вакансии не найдены" />
                )}
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-dark" href={route("vacancy.create")}>
                        Создание новости
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
