import React from "react";
import AddToList from "./AddToList";
import './App.css';
import MyList from "./MyList";

function App() {
  return (
    <div className="App">
      <div className="App__body">

        <div className="App__body__title">
          My To Do List
        </div>

        <div className="App__body__content">
          <AddToList />
          <MyList />
        </div>
      </div>
    </div>
  );
}

export default App;
