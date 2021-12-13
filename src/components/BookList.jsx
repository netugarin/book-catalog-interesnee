import React from 'react';
import BookGroup from "./BookGroup";


const BookList = ({books, remove, edit }) => {

    return (
        <div>
            <BookGroup books={books} remove={remove} edit={edit}/>
        </div>
    );
};

export default BookList;