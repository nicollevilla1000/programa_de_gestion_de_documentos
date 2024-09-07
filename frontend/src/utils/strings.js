const removeFirstLetter = (text) =>  {
    return text.slice(1);
}

const formatURL = (url) => {
    return url.replace(/_/g, ' ')
}

export {
    removeFirstLetter,
    formatURL,
}