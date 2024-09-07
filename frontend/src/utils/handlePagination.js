const handlePagination = (type="home", setState, totalPages) => {
    if (type == "back") 
        setState((prevPage) => Math.max(prevPage - 1, 1));
    else if (type == "next")
        setState((prevPage) => Math.min(prevPage + 1, totalPages));
    else if (type == "last")
        setState(totalPages);
    else
        setState(1);
}

export { handlePagination }