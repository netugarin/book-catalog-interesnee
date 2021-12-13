import React, {useState, useEffect}  from "react";
import "./styles/App.css"
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import db from "./firebasedb"
import {onSnapshot, collection, doc, setDoc, deleteDoc} from "firebase/firestore"
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import RecommendedBook from "./components/RecommendedBook";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from "react-bootstrap";


function App() {
    const [books, setBooks] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        onSnapshot(collection(db, 'books'), (snapshot) => {
            setBooks(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
        });

    }, [])

    const createBook = async (newBook) => {
        const docRef = doc(collection(db, "books"));
        setModal(false);
        await setDoc(docRef, newBook);
        console.log(newBook)
    }
    
    const removeBook = async (id) => {
        const docRef = doc(db, "books", id);
        await deleteDoc(docRef);
    }
    
    const editBook = async (book) => {
        console.log(book)
    }

  return (
    <div className="App">
        <h1 className='title'>Book catalog</h1>
        {books.length !== 0
        ? <div>
                <div className="d-grid btn-add">
                    <MyButton onClick={() => setModal(true)} size='lg'>Add book</MyButton>
                </div>
                <MyModal show={modal} setVisible={setModal}>
                    <BookForm create={createBook}/>
                </MyModal>
                <RecommendedBook books={books}/>
                <BookList remove={removeBook} edit={editBook} books={books} />
            </div>
        : <div className='spinner'><Spinner animation="border" variant="dark" /></div>
        }

    </div>
  );
}

export default App;
