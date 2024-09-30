import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";
<<<<<<< Updated upstream
import { Button } from "./components/Button/Button";
=======
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import BadgesPage from "./pages/BadgesPage/BadgesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(0);
  const [message,setMessage]=useState("");
 
  const updateCounter = (increase: boolean) => {
    setCount((currentValue) => {
      if(increase)
      {
        setMessage("");
        return currentValue+1;
      }
      else if(currentValue<=0)
      {
        setMessage("Az érték kisebb mint 0 ezért nem lehet csökkenteni");
        return currentValue;
      }
      else
      {
        setMessage("");
        return currentValue=currentValue-1;
      }
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
<<<<<<< Updated upstream
      <div className="container d-flex justify-content-center">
        <div className="card bg-white shadow text-center p-4 m-4">
          <h1>Counter: {count}</h1>
          <h2>{message}</h2>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <Button color="primary" onClick={() => updateCounter(true)}>
              Increase
            </Button>
            <Button color="secondary" onClick={() => updateCounter(false)}>
              Decrease
            </Button>
            <Button color="danger" onClick={() => setCount(0)}>
              Reset
            </Button>
          </div>
        </div>
      </div>
=======
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="badges" element={<BadgesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;


