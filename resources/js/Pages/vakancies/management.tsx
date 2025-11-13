import React from "react";
import Layout from "../Layout";
import { Head, Link, usePage } from "@inertiajs/react";
import { VakanciesPag } from "../../interface";
import NotFoundRecords from "../../components/ui/NotFoundRecords";
import VakanciesCard from "../../components/VakanciesCard";
import Paginate from "../../components/ui/Paginate";
import { route } from "ziggy-js";
export default function VakanciesManagement() {
    const { vakancies } = usePage<{ vakancies: VakanciesPag }>().props;
    const title = "Управление вакансиями";
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
                                    title={item.title}
                                    id={item.id}
                                    image={item.image}
                                    payment={item.payment}
                                />
                            ))}
                        </div>
                        <div className="d-flex justify-content-center">
                            <Paginate item={vakancies} />
                        </div>
                    </div>
                ) : (
                    <NotFoundRecords text="Вакансии не найдены" />
                )}
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-dark" href={route("vakancies.create")}>
                        Создание новости
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
