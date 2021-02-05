import React, { useState } from "react";
import './Item.css';
import Checkbox from '@material-ui/core/Checkbox';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

function Item() {

    const [checked, setChecked] = useState(true);

    const handleChange = (e) => {
        e.preventDefault();
        setChecked(e.target.checked);
    };

    const deleteItem = (e) => {
        e.preventDefault();
        setChecked(!checked)
    }

    return (
        <div className="Item">
            <div className="Item__status">
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </div>
            <div className="Item__text">
                My Textasdasdaksdpokaspodakpsodkapsodkaposodkpaskdpaskpdakspdkapok
            </div>
            <div className="Item__actions">
                <HighlightOffOutlinedIcon onClick={deleteItem} />
            </div>
        </div>
    );
}

export default Item;
