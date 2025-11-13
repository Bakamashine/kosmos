import { Head, usePage } from "@inertiajs/react"
import React from "react"
import { Vakancies } from "../../interface"
import Layout from "../Layout";
import VakanciesForm from "../../forms/VakanciesForm";
import { HttpMethod } from "../../helper/enum";
import { route } from "ziggy-js";

export default function EditVacancy() {
    const {vakancy} = usePage<{vakancy: Vakancies}>().props;
    console.log(vakancy)
    return (
        <Layout>
            <Head title={vakancy.title} />
            <h1 className="text-center">Редактирование вакансии</h1>
            <div>
                <VakanciesForm
                    method={HttpMethod.PUT}
                    url={route('vakancies.update', {vakancy: vakancy.id})}
                    description={vakancy.description}
                    textbutton="Обновить вакансию"
                    title={vakancy.title}
                    payment={vakancy.payment}
                    old_image={vakancy.image}
                />
            </div>
        </Layout>
    )
}
