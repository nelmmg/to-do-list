import React, { useState } from "react";
import './Item.css';
import Checkbox from '@material-ui/core/Checkbox';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

function Item() {

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const deleteItem = (e) => {
        e.preventDefault();
        alert("Deleted!")
    }

    return (
        <div className="Item">
            <div className="Item__status">
                <Checkbox
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </div>
            <div className="Item__text">
                My Textasdasdaksdpokasp odakpsodkapsodkaposodkpaskdpaskpdakspd kapok
            </div>
            <div className="Item__actions">
                <HighlightOffOutlinedIcon onClick={deleteItem} >
                </HighlightOffOutlinedIcon>
            </div>
        </div>
    );
}

export default Item;
