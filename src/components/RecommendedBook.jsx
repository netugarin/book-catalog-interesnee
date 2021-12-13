import React from 'react';
import {Card} from "react-bootstrap";


const RecommendedBook = ({books}) => {
    let threeYearsBooks = [];
    let recommendedBooks = [];
    let highestRating = 0;
    let today = new Date();

    // получаем книги за ближайшие три года
    for (let i = 0; i < books.length; i++) {
        if (today.getFullYear() - books[i].publicationYear <= 3) {
            threeYearsBooks.push(books[i])
        }
    }

    // получаем самый высокий рейтинг среди них
    if (threeYearsBooks.length !== 0) {
        for (let i = 0; i < threeYearsBooks.length; i++) {
            if (threeYearsBooks[i].rating >= highestRating) {
                highestRating = threeYearsBooks[i].rating
            }
        }
    }

    // сравниваем рейтинг и добавляем  список рекомендуемых
    for (let i = 0; i < threeYearsBooks.length; i++) {
        if (threeYearsBooks[i].rating === highestRating) {
            recommendedBooks.push(threeYearsBooks[i])
        }
    }

    // выбираем одну рандомно
    let recommendedBook = recommendedBooks[Math.floor(Math.random()*recommendedBooks.length)];

    return (
        <div style={{margin: '1rem 0 1rem 0'}}>
            {recommendedBook === undefined
                ? <Card>
                    <Card.Header>There is no recommended book.</Card.Header>
                </Card>
                : <Card>
                    <Card.Header>Recommended book</Card.Header>
                    <Card.Body>
                        <Card.Title>{recommendedBook.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{recommendedBook.author}</Card.Subtitle>
                        <Card.Text className="mb-1">Publication year: {recommendedBook.publicationYear}</Card.Text>
                        <Card.Text className="mb-1">{recommendedBook.rating !== '' ? <span>Rating: {recommendedBook.rating}</span> : null}</Card.Text>
                        <Card.Text >{recommendedBook.isbn !== '' ? <span>ISBN: {recommendedBook.isbn}</span> : null}</Card.Text>
                  </Card.Body>
                </Card>
            }
        </div>


    );
};

export default RecommendedBook;