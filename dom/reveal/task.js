let isInViewport = (element) => {
    let viewportHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    let elementBottom = element.getBoundingClientRect().bottom;
    return (elementTop < viewportHeight && elementBottom > 0);
};

let showText = () => {
    let reveal = document.getElementsByClassName('reveal');
    let revealsArr = Array.from(reveal);
    revealsArr.forEach(reveal => {
        if (isInViewport(reveal)) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    })}

document.addEventListener('scroll', () => {showText()});