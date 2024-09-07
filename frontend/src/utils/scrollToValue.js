const scrollToValue = (xValue=0, yValue=400, delay=0) => {
    setTimeout(() => {
        document.documentElement.scrollTo(xValue, yValue)
    }, delay);
}

export { scrollToValue }; 