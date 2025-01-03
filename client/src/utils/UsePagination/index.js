import React, { useState } from "react";

const UsePagination = (items, pageLimit) => {
    const [pageNumber, setPageNumber] = useState(0);
    const pageCount = Math.ceil(items.length / pageLimit);

    const changePage = (page) => {
        setPageNumber(page);
    };

    const pageData = () => {
        const start = pageNumber * pageLimit;
        const end = start + pageLimit;
        return items.slice(start, end);
    };

    const nextPage = () => {
        setPageNumber(Math.min(pageNumber + 1, pageCount - 1));
    };

    const prevPage = () => {
        setPageNumber(Math.max(pageNumber - 1, 0));
    };

    return { 
        pageNumber, 
        pageCount, 
        changePage,
        pageData,
        nextPage,
        prevPage
    };
};

export default UsePagination;