export const groupBooksByYear = (books) => {
    let booksGroup = {};
    let years = [];

    for (let i = 0; i < books.length; i++) {
        years.push(books[i].publicationYear);
    }

    years = years.filter((item, index) => years.indexOf(item) === index);
    years.sort((a, b) => b - a)
    years = years.map(year => "+" + year)

    for (let i = 0; i < years.length; i++) {
        if (years[i] === "+") {
            years[i] = "Books without date"
            booksGroup[years[i]] = [];
        } else {
            booksGroup[years[i]] = [];
        }

    }

    for (let i = 0; i < years.length; i++) {
        for (let j = 0; j < books.length; j++) {
            if (books[j].publicationYear === +years[i]) {
                booksGroup[years[i]].push(books[j]);
            } else if (books[j].publicationYear === '' && years[i] === "Books without date") {
                booksGroup[years[i]].push(books[j])
            }
        }
    }

    for (let j = 0; j < Object.keys(booksGroup).length; j++) {
        booksGroup[years[j]].sort((a, b) => a.title.localeCompare(b.title));
    }
    return booksGroup;
};

export const groupBooksByRating = (books) => {
    let booksGroup = {};
    let rating = [];

    for (let i = 0; i < books.length; i++) {
        rating.push(books[i].rating);
    }

    rating = rating.filter((item, index) => rating.indexOf(item) === index);
    rating.sort((a, b) => b - a)
    rating = rating.map(rating => "+" + rating)


    for (let i = 0; i < rating.length; i++) {
        booksGroup[rating[i]] = [];
    }

    for (let i = 0; i < rating.length; i++) {
        for (let j = 0; j < books.length; j++) {
            if (books[j].rating === +rating[i]) {
                booksGroup[rating[i]].push(books[j]);
            }
        }
    }

    for (let j = 0; j < Object.keys(booksGroup).length; j++) {
        booksGroup[rating[j]].sort((a, b) => a.title.localeCompare(b.title));
    }

    return booksGroup;
};

export const groupBooksByAuthor = (books) => {
    let booksGroup = {};
    let authors = [];

    for (let i = 0; i < books.length; i++) {
        let splitAuthors =  books[i].author.split('; ')
        for (let j = 0; j < splitAuthors.length; j++) {
            authors.push(splitAuthors[j]);
        }

    }
    authors = authors.filter((item, index) => authors.indexOf(item) === index);
    authors.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < authors.length; i++) {
        booksGroup[authors[i]] = [];
    }

    for (let i = 0; i < authors.length; i++) {
        for (let j = 0; j < books.length; j++) {
            if (books[j].author.includes(authors[i])) {
                booksGroup[authors[i]].push(books[j]);
            }
        }
    }

    for (let j = 0; j < Object.keys(booksGroup).length; j++) {
        booksGroup[authors[j]].sort((a, b) => a.title.localeCompare(b.title));
    }

    return booksGroup;
};
