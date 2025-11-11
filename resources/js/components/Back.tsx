import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import React from "react";

export default function Back({
    pathName,
    text = "Назад",
}: {
    pathName: string;
    text?: string;
}) {
    return (
        <div className="mt-3">
            <Link href={route(pathName)}>{text}</Link>
        </div>
    );
}
