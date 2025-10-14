import { FormEvent } from "react";

export function submit(e: FormEvent<HTMLFormElement>, callback: (path: string) => void, path: string) {
    e.preventDefault();
    // PostFeedback("/feedback");
    callback(path);
}
