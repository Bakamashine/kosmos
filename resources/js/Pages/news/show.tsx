import { Head, Link, usePage } from "@inertiajs/react";
import { News, NewsPag, User } from "../../interface";
import Layout from "../Layout";
import { route } from "ziggy-js";

export default function ShowNews() {
    const {props} = usePage<{auth: {user: User}; news: News}>();
    const news = props.news;
    const user = props.auth.user;

    return (
        <Layout>
            <Head title={news.title} />
            <div className="text-center">
                <h1>{news.title}</h1>
                <p>{news.description}</p>
                <div>
                    <Link className="" href={route("main")}>
                        Назад
                    </Link>
                </div>

                {user.role_name === "admin" && (
                    <div>
                        <Link className="" href={route("news.index")}>
                            К новостям (админ)
                        </Link>
                    </div>
                )}
            </div>
        </Layout>
    );
}
