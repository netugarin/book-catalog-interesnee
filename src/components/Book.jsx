import React from 'react';
import MyButton from "./UI/button/MyButton";
import {Card} from "react-bootstrap";

const Book = (props) => {

    return (
        <div className="book">
            <Card style={{ width: '50rem' }}>
                <Card.Body>
                    <Card.Title>{props.book.title}</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">{props.book.author}</Card.Subtitle>
                    <Card.Text className="mb-1">{props.book.publicationYear !== '' ? <span>Publication year: {props.book.publicationYear}</span> : null}</Card.Text>
                    <Card.Text className="mb-1">{props.book.rating !== 0 ? <span>Rating: {props.book.rating}</span> : null}</Card.Text>
                    <Card.Text className="mb-1">{props.book.isbn !== '' ? <span>ISBN: {props.book.isbn}</span> : null}</Card.Text>
                    <MyButton  onClick={() => props.remove(props.book.id)} variant="outline-danger">Delete</MyButton>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Book;