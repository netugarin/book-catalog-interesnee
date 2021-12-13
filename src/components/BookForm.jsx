import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { Form} from "react-bootstrap";

const BookForm = ({create}) => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        publicationYear: '',
        rating: 0,
        isbn: ''
    });

    const addNewBook = (e) => {
        e.preventDefault();
        const newBook = {
            ...book
        }
        create(newBook);
        setBook(
            {title: '',
                author: '',
                publicationYear: '',
                rating: 0,
                isbn: ''}
        )
    }

    return (
        <Form onSubmit={addNewBook}>
            <MyInput
                value={book.title}
                onChange={e => setBook({...book, title: e.target.value})}
                type="text"
                placeholder='Book title'
            />
            <MyInput
                value={book.author}
                onChange={e => setBook({...book, author: e.target.value})}
                type="text"
                placeholder='Author'/>
            <MyInput
                value={book.publicationYear}
                onChange={e => setBook({...book, publicationYear: Number(e.target.value)})}
                type="number"
                placeholder='Publication year'/>
            <MyInput
                value={book.rating}
                onChange={e => setBook({...book, rating: Number(e.target.value)})}
                type="number"
                min='0'
                max='10'
                placeholder='Rating'/>
            <MyInput
                value={book.isbn}
                onChange={e => setBook({...book, isbn: e.target.value})}
                type="text"
                placeholder='ISBN'/>
            <div className="d-grid">
                <MyButton  type="submit" size='lg'>Add book</MyButton>
            </div>

        </Form>
    );
};

export default BookForm;