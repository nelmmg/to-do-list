import React, { useState } from "react";
import './AddToList.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function AddToList() {

    const [input, setInput] = useState('');

    const addThisToList = (e) => {
        e.preventDefault();
        if (!input) {
            return;
        }
        alert("Added:" + input);
        setInput("");
    }

    return (
        <div className="AddToList">
            <form>
                <TextField
                    label="My task"
                    variant="outlined"
                    value={input}
                    fullWidth
                    onChange={(e) => setInput(e.target.value)} />
                <Button variant="outlined" onClick={addThisToList}
                    color="default" type="submit">
                    Add! </Button>
            </form>
        </div>
    );
}

export default AddToList;
