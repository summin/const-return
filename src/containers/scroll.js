onScroll = () => {
    const run = (root) => {
        let h = root[0]
            .getElementsByClassName("sticky-hero")[0]
            .getElementsByClassName("hero")[0]
            .getElementsByTagName("h3")[0];
        let c = root[0].scrollTop
        h.style.bottom = "-" + c / 3 + "px"
        h.style.opacity = (1 - (c / 160))
    }
    document.getElementsByClassName("content-fadable A")[0].getElementsByClassName("sticky-hero")[0]
        && run(document.getElementsByClassName("content-fadable A"));
    document.getElementsByClassName("content-fadable B")[0].getElementsByClassName("sticky-hero")[0]
        && run(document.getElementsByClassName("content-fadable B"));
}