import React, {useState, Fragment} from 'react';
import Book from "./Book";
import {groupBooksByYear, groupBooksByRating, groupBooksByAuthor} from "./diffunctions";
import MySelect from "./UI/select/MySelect";


const BookGroup = ({books, remove, edit}) => {
    const [selectedGroup, setSelectedGroup] = useState('publicationYear');
    let booksGroup = groupBooksByYear(books)
    switch (selectedGroup) {
        case 'publicationYear':
            booksGroup = groupBooksByYear(books);
            break;
        case 'rating':
            booksGroup = groupBooksByRating(books);
            break;
        case 'author':
            booksGroup = groupBooksByAuthor(books);
            break;
    }

    return (
        <div>
            <MySelect
                value={selectedGroup}
                onChange={sort => setSelectedGroup(sort)}
                options={[
                    {value: 'publicationYear', name: 'By publication year'},
                    {value: 'rating', name: 'By rating'},
                    {value: 'author', name: 'By author'}
                ]}
            />
            {Object.entries(booksGroup).map(([key, value], index) =>
                (
                    <Fragment key={index}>
                        {selectedGroup === 'publicationYear' || selectedGroup === 'rating'
                            ? <h1 style={{textAlign: 'center', marginTop: '14px'}}>{key === 'Books without date' ? key : +key} </h1>
                            : <h1 style={{textAlign: 'center', marginTop: '14px'}}>{key}</h1>
                        }
                        {value.map((book) => (
                            <Book remove={remove} edit={edit} book = {book} key={book.id}/>
                         ))}
                    </Fragment>
                )

            )}
        </div>
    );
};

export default BookGroup;