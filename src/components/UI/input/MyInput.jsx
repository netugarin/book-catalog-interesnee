import React from 'react';
import {InputGroup, FormControl} from "react-bootstrap";

const MyInput = (props) => {
    return (
        <InputGroup {...props} className="mb-2">
            <FormControl
            placeholder={props.placeholder}

            />
        </InputGroup>
    );
};

export default MyInput;