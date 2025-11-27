import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { VacancyPag } from "../../interface";
import Layout from "../Layout";
import VacancyCard from "../../components/VacancyCard";
import Paginate from "../../components/ui/Paginate";
import NotFoundRecords from "../../components/ui/NotFoundRecords";

export default function TrashVacancy() {
    const { vacancy } = usePage<{ vacancy: VacancyPag }>().props;
    // console.log("Trash vacancy: ", vacancy)

    const title = "Удалённые вакансии";
    return (
        <Layout title={title} title_h1>

            <div className="">
                {vacancy && vacancy.data && vacancy.data.length > 0 ? (
                    <div>
                        <div className="news">
                            {vacancy.data.map((item, index) => (
                                <div key={index}>
                                    <VacancyCard
                                        key={index}
                                        description={item.description}
                                        title={item.title}
                                        id={item.id}
                                        deleted={true}
                                        image={item.image}
                                        payment={item.payment}
                                    />
                                    <div className="mt-2 text-center">
                                        <Link
                                            className="text-success"
                                            method="post"
                                            href={`/vacancy/${item.id}/restore`}
                                        >
                                            Восстановить
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex justify-content-center">
                            <Paginate item={vacancy} />
                        </div>
                    </div>
                ) : (
                    <NotFoundRecords text="Удалённые вакансии не найдены" />
                )}

                {/* <div className="text-center">
                    <Link href={route("vacancy.management")}>
                        К управлению вакансиями
                    </Link>
                </div> */}
            </div>
        </Layout>
    );
}
