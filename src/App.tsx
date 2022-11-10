import React from "react";
import Header from "./components/Header/Header";
import Tickets from "./containers/Tickets/Tickets";
import Board from "./containers/Board/Board";
import "./App.css"

const App = () => {
  const lanes = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
  ];

  return (
    <div className="GlobalStyle">
      <div className="AppWrapper">
        <Header />
        <Board lanes={lanes} dataSource={"../../assets/data.json"} />
        <Tickets dataSource={"../../assets/data.json"} />
      </div>
    </div>
  );
};

export default App;
