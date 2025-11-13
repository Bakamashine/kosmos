import { Head, usePage } from "@inertiajs/react";
import React from "react";
import { Vacancy } from "../../interface";
import Layout from "../Layout";
import VacancyForm from "../../forms/VacancyForm";
import { HttpMethod } from "../../helper/enum";
import { route } from "ziggy-js";

export default function EditVacancy() {
    const { vacancy } = usePage<{ vacancy: Vacancy }>().props;
    // console.log(vacancy);
    return (
        <Layout>
            <Head title={vacancy.title} />
            <h1 className="text-center">Редактирование вакансии</h1>
            <div>
                <VacancyForm
                    method={HttpMethod.PUT}
                    url={route("vacancy.update", { vacancy: vacancy.id })}
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
