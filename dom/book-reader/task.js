let changeSizeText = () => {
    let fontSizes = document.getElementsByClassName('font-size');
    let fontSizesArr = Array.from(fontSizes);
    let book = document.getElementById('book');

    fontSizesArr.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault()
            for (let i = 0; i < fontSizesArr.length; i++) {
                fontSizesArr[i].classList.remove('font-size_active');
            }
            item.classList.add('font-size_active');

            if (item.classList.contains('font-size_small')) {
                book.classList.remove('book_fs-big');
                book.classList.add('book_fs-small');
            } else if (item.classList.contains('font-size_big')) {
                book.classList.remove('book_fs-small');
                book.classList.add('book_fs-big');
            } else {
                book.classList.remove('book_fs-small');
                book.classList.remove('book_fs-big');
            }
        })
    })

}

changeSizeText()