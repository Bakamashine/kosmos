import { FormEvent } from "react";

export function submit(e: FormEvent<HTMLFormElement>, callback: (path: string) => void, path: string) {
    e.preventDefault();
    // PostFeedback("/feedback");
    callback(path);
}

export function decodeHtml(code: string) {
    const temp = document.createElement("p");
    temp.innerHTML = code;
    return temp.textContent;
}
export function GetSizeWindow() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

