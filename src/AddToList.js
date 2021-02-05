import React, { useState, useEffect } from "react";
import './AddToList.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase/app';
import db, { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function AddToList() {

    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);

    const addThisToList = (e) => {
        e.preventDefault();

        if (!input) {
            return;
        }

        db.collection('users').doc(user.uid).collection('tasks').add(
            {
                desc: input,
                done: false,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
        setInput("");
    }

    return (
        <div className="AddToList">
            <form>
                <TextField
                    label="New task"
                    variant="outlined"
                    value={input}
                    fullWidth
                    onChange={(e) => setInput(e.target.value)} />
                <Button variant="outlined" onClick={addThisToList}
                    color="default" type="submit">
                    Add</Button>
            </form>
        </div>
    );
}

export default AddToList;
