import React from 'react';
import {Form} from "react-bootstrap";

const MySelect = ({options, value, onChange}) => {
    return (
        <Form.Select
        value={value}
        onChange={event => onChange(event.target.value)}
        >
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </Form.Select>

    );
};

export default MySelect;