import React, { useEffect } from "react";
import "./App.css";
import { getQuizDetails } from "./services/quiz_service";

function App() {
  useEffect(() => {
    // Async function
    async function fetchData() {
      const questions = await getQuizDetails(5, "easy");
      console.log(questions);
    }

    fetchData();
  }, []);

  return <div className="App"> Helleeeoooowww </div>;
}

export default App;
