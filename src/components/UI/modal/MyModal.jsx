import React from 'react';
import {Modal} from "react-bootstrap";

const MyModal = ({children, show, setVisible}) => {
    return (
        <div  onClick={() => setVisible(false)}>
            <Modal show={show} onHide={() => setVisible(false)} onClick={(event) => event.stopPropagation()}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new book</Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
            </Modal>
        </div>
    );
};

export default MyModal;