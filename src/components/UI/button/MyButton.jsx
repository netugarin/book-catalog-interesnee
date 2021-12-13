import React from 'react';
import classes from './MyButton.module.css'
import { Button } from "react-bootstrap";

const MyButton = ({children, ...props}) => {
    return (
        <Button {...props} className={classes.myBtn}>
            {children}
        </Button>
    );
};

export default MyButton;