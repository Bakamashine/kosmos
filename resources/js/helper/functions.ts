import { FormEvent } from "react";
import { HttpMethod } from "./enum";
import { route } from "ziggy-js";
import * as he from "he"

export function submit(
    e: FormEvent<HTMLFormElement>,
    url: string,
    method: HttpMethod,
    form: any,
    // callback: (path: string) => void,
    // path: string
) {
    e.preventDefault();
    switch (method) {
        case HttpMethod.POST:
           form.post(route(url));
           break;
        case HttpMethod.GET:
            form.get(route(url));
            break
        case HttpMethod.DELETE:
            form.delete(route(url));
            break;
        case HttpMethod.PATCH:
            form.patch(route(url));
            break;
        case HttpMethod.PUT:
            form.put(route(url));
            break;
        default:
            throw new Error("Not found method");
    }
    // PostFeedback("/feedback");
    // callback(path);
}

export function decodeHtml(code: string) {
    return he.decode(code);
}
export function GetSizeWindow() {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
}

export function GetStatus(status: number) {
    switch (status) {
        case 1:
            return "Активный";
        case 2:
            return "Заблокированный";
    }
}
