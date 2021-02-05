import React, { useState } from "react";
import './Task.css';
import Checkbox from '@material-ui/core/Checkbox';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import db, { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Task({ id, desc, done }) {

    const [checked, setChecked] = useState(done);
    const [user] = useAuthState(auth);

    const handleChange = (e) => {
        e.preventDefault();
        setChecked(e.target.checked);
    };

    const deleteTask = (e) => {
        e.preventDefault();
        setChecked(!checked)
        db.collection('users').doc(user.uid).collection("tasks").doc(id)
            .delete();
    }

    return (
        <div className="Task">
            <div className="Task__status">
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </div>
            <div className="Task__text">
                {desc}
            </div>
            <div className="Task__actions">
                <HighlightOffOutlinedIcon onClick={deleteTask} />
            </div>
        </div>
    );
}

export default Task;
