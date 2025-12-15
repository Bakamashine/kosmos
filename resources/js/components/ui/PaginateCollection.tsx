import React, { JSX } from "react";
import { OrderPagCollection, Pag, PagCollection } from "../../interface";
import { Pagination } from "react-bootstrap";
import { router } from "@inertiajs/react";

function PaginateCollection({ item }: { item: PagCollection }) {
    function onClickPage(value: number) {
        // router.get(item.links[value].url);
        router.get(item.meta.links[value].url);
    }

    function firstPage() {
        router.get(item.links.first);
    }

    function prevPage() {
        let url = item.links.prev;
        url !== null && router.get(url);
    }

    function nextPage() {
        let url = item.links.next;
        url !== null && router.get(url);
    }

    function lastPage() {
        router.get(item.links.last);
    }

    let active = item.meta.current_page;
    let items: JSX.Element[] = [];
    for (let number = 1; number <= item.meta.last_page; number++) {
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

export default PaginateCollection;
