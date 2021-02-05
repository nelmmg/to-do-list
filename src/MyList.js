import React, { useState, useEffect } from "react";
import Task from "./Task";
import './MyList.css';
import db, { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function MyList() {
    const [tasks, setTasks] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        db.collection('users').doc(user.uid).collection('tasks').orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setTasks(snapshot.docs.map(doc => (
                {
                    id: doc.id
                }
            )));
        });
    }, []);


    return (
        <div className="MyList">
            <div className="MyList__content">
                My tasks:
                <div className="MyList__tasks">
                    {tasks.map((task) => (
                        <div key={task.id}>
                            <Task id={task.id} />
                            <div className="MyList__divisor" />
                        </div>
                    ))}

                    {/* Refactor to a method */}
                    {tasks.length > 0 &&
                        <div className="MyList__label">
                            End of the list
                        </div>
                    }
                    {tasks.length === 0 &&
                        <div className="MyList__label">
                            No tasks!
                        </div>
                    }
                </div>

            </div>


        </div>
    );
}

export default MyList;
