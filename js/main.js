let copyRight = document.getElementById("copyRightAWDS");
setTimeout(() => {
    copyRight.style = `opacity: 0;  z-index: -999999`;
}, 2000);

let InfoBooks = () => {
    let bookInfof = document.getElementById("bookInfo").value;
    if (bookInfof == "quran") {
        document.getElementById("image-author").src =
            "/image/svg/bulk-user-square.svg";
        document.getElementById("book-image-01").src =
            "/image/books-img/koranBook.jpg";
        document.getElementById("heading-03").innerHTML = "Al Quran";
        document.getElementById("parg-03").innerHTML = "Book From Allah";
    } else if (bookInfof == "sahih") {
        document.getElementById("image-author").src =
            "/image/svg/bulk-user-square.svg";
        document.getElementById("book-image-01").src =
            "/image/books-img/sahihBook.png";
        document.getElementById("heading-03").innerHTML = "Al Sahih";
        document.getElementById("parg-03").innerHTML = "Abdualrhman";
    } else if (bookInfof == "amrican") {
        document.getElementById("image-author").src =
            "/image/svg/bulk-user-square.svg";
        document.getElementById("book-image-01").src =
            "/image/books-img/amricanBook.png";
        document.getElementById("heading-03").innerHTML = "Amrican Book";
        document.getElementById("parg-03").innerHTML = "Jon";
    } else if (bookInfof == "after") {
        document.getElementById("image-author").src =
            "/image/svg/bulk-user-square.svg";
        document.getElementById("book-image-01").src =
            "/image/books-img/afterBook.jpg";
        document.getElementById("heading-03").innerHTML = "After Back";
        document.getElementById("parg-03").innerHTML = "Unknown author";
    } else if (bookInfof == "fostaq") {
        document.getElementById("image-author").src =
            "/image/svg/bulk-user-square.svg";
        document.getElementById("book-image-01").src =
            "/image/books-img/fostaqBook.png";
        document.getElementById("heading-03").innerHTML = "fostaq";
        document.getElementById("parg-03").innerHTML = "Unknown author";
    } else {
        document.getElementById("image-author").src =
            // "/image/svg/bulk-user-square.svg";
            "/image/svg/bulk-user-square.svg";
        document.getElementById("heading-03").innerHTML = "no book";
    }
};
