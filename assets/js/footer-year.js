const footerYear = () => {
    let dater = new Date();
    let year = dater.getFullYear();
    return document.writeln(year);
}

footerYear();