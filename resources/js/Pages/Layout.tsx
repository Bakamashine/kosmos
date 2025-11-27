import React, {
    MouseEventHandler,
    ReactNode,
    useEffect,
    useMemo,
    useState,
} from "react";
import Header from "../includes/header";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Breadcrumb } from "react-bootstrap";
import { BreadCrumps } from "../interface";
import Footer from "../includes/footer";

const Layout = ({
    children,
    title,
    meta,
    title_h1 = false,
    title_h1_replace,
}: {
    children: ReactNode;
    title: string;
    title_h1?: boolean;
    title_h1_replace?: string;
    meta?: string;
}) => {
    const { breadcrumbs, appName } = usePage<{
        breadcrumbs: BreadCrumps[];
        appName: string;
    }>().props;
    // console.log("BreadCrumps: ", breadcrumbs);
    let calculatorWindow: Window | null;
    const [isClient, setIsClient] = useState(false);

    // if (typeof window === "undefined") {
    //     return null;
    // }

    useEffect(()=>{
        openWindow();
    },[isClient])

    function openWindow() {
        // event.preventDefault();

        if (calculatorWindow && !calculatorWindow.closed) {
            calculatorWindow.focus();
            return;
        }
        let windowFeatures =
            "height=400,width=400,status=yes,toolbar=no,menubar=no,location=no,popup";
        calculatorWindow = window.open(
            "/calculator-popup.html",
            "CalculatorWindow",
            windowFeatures
        );
    }

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
                {title_h1_replace ? title_h1_replace : title} - {appName}
            </h1>
        );
    }, [title_h1, title, title_h1_replace]);

    return (
        <>
            <Head>
                <title>{title}</title>
                {meta && <meta name="description" content={meta} />}
            </Head>
            <header>
                <Header />

                {breadcrumbsList}
            </header>
            <button
                className="calculator_button nomobile"
                onClick={(event) => setIsClient(true)}
            >
                <img src="/img/calculator.svg" />
            </button>
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
