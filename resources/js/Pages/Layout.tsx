import React, { ReactNode, useMemo } from "react";
import Header from "../includes/header";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Breadcrumb } from "react-bootstrap";
import { BreadCrumps } from "../interface";
import { route } from "ziggy-js";
import Footer from "../includes/footer";

const Layout = ({
    children,
    title,
    meta,
    title_h1 = false,
    title_h1_replace = undefined,
}: {
    children: ReactNode;
    title: string;
    title_h1?: boolean;
    title_h1_replace?: string;
    meta?: string;
}) => {
    const { breadcrumbs } = usePage<{ breadcrumbs: BreadCrumps[] }>().props;
    // console.log("BreadCrumps: ", breadcrumbs);

    const breadcrumbsList = useMemo(() => {
        if (!breadcrumbs || breadcrumbs.length === 0) return null;
        return (
            <Breadcrumb className="breadcrumps">
                {breadcrumbs.map((item, index) => (
                    <Breadcrumb.Item
                        key={index}
                        onClick={() => router.visit(item.url)}
                    >
                        {item.title}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        );
    }, [breadcrumbs]);

    const pageTitleh1 = useMemo(() => {
        if (!title_h1) return null;

        return (
            <h1 className="text-center p-2">
                {title_h1_replace ? title_h1_replace : title}
            </h1>
        );
    }, [title_h1, title, title_h1_replace]);

    return (
        <>
            <header>
                <Head>
                    <title>{title}</title>
                    {meta && <meta name="description" content={meta} />}
                </Head>
                <Header />

                {breadcrumbsList}
            </header>
            <main>
                <section className="main__wrapper">
                    {pageTitleh1}
                    {children}
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Layout;
