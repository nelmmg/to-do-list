import React from "react";
import AddToList from "./AddToList";
import './App.css';
import Login from "./Login";
import MyList from "./MyList";
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <div className="App__body">
        {user &&
          <div className="App__logout">
            <ExitToAppIcon onClick={() => auth.signOut()} />
          </div>
        }

        <div className="App__body__title">
          My Todo List
        </div>
        {!user ? (
          <Login />
        ) : (
            <div className="App__body__content">
              <AddToList />
              <MyList />
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
