import React, { useState, useEffect } from "react";
import './Task.css';
import Checkbox from '@material-ui/core/Checkbox';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import db, { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ConfirmDialog from './ConfirmDialog';

function Task({ id }) {

    const [user] = useAuthState(auth);

    const [checked, setChecked] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [desc, setDesc] = useState("");

    useEffect(() => {
        db.collection('users').doc(user.uid).collection('tasks').doc(id).onSnapshot(snapshot => {
            if (snapshot.data()) {
                setChecked(snapshot.data().done);
                setDesc(snapshot.data().desc);
            }
        });
    }, []);


    const handleChange = (e) => {
        e.preventDefault();
        const isDone = e.target.checked;
        setChecked(isDone);
        db.collection('users').doc(user.uid).collection("tasks").doc(id).update({ done: isDone });
    };

    const deleteTask = (taskId) => {
        db.collection('users').doc(user.uid).collection("tasks").doc(taskId)
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
                <HighlightOffOutlinedIcon onClick={() => setConfirmOpen(true)} />
                <ConfirmDialog
                    title="Delete task?"
                    open={confirmOpen}
                    setOpen={setConfirmOpen}
                    onConfirm={() => { deleteTask(id) }}
                >
                    Task cannot be recovered!
                 </ConfirmDialog>
            </div>
        </div>
    );
}

export default Task;
