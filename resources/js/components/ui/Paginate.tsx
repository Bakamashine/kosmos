import React, { JSX } from "react";
import { Pag } from "../../interface";
import { Pagination } from "react-bootstrap";
import { router } from "@inertiajs/react";

function Paginate({ item }: { item: Pag }) {
    function onClickPage(value: number) {
        router.get(item.links[value].url);
    }

    function firstPage() {
        router.get(item.first_page_url);
    }

    function prevPage() {
        let url = item.prev_page_url;
        url !== null && router.get(url);
    }

    function nextPage() {
        let url = item.next_page_url;
        url !== null && router.get(url);
    }

    function lastPage() {
        router.get(item.last_page_url);
    }

    let active = item.current_page;
    let items: JSX.Element[] = [];
    for (let number = 1; number <= item.last_page; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => onClickPage(number)} // Переход по URL
            >
                {number}
            </Pagination.Item>
        );
    }
    return (
        <>
            <div className="pt-2">
                <Pagination>
                    <Pagination.First onClick={firstPage} />
                    <Pagination.Prev onClick={prevPage} />
                    {items}
                    <Pagination.Next onClick={nextPage} />
                    <Pagination.Last onClick={lastPage} />
                </Pagination>
            </div>
        </>
    );
}

export default Paginate;
