import { Head, usePage } from "@inertiajs/react";
import React from "react";
import { Vacancy } from "../../interface";
import Layout from "../Layout";
import VacancyForm from "../../forms/VacancyForm";
import { HttpMethod } from "../../helper/enum";

export default function EditVacancy() {
    const { vacancy } = usePage<{ vacancy: Vacancy }>().props;
    // console.log(vacancy);
    return (
        <Layout title={vacancy.title} title_h1 title_h1_replace="Редактирование вакансии">
            <div>
                <VacancyForm
                    method={HttpMethod.PUT}
                    url={`/vacancy/${vacancy.id}`}
                    description={vacancy.description}
                    textbutton="Обновить вакансию"
                    title={vacancy.title}
                    payment={vacancy.payment}
                    old_image={vacancy.image}
                />
            </div>
        </Layout>
    );
}
