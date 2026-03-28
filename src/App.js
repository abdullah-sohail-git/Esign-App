import React, {useState} from "react";
import Title from "./components/Title";

function App() {
  const [name, setName] = useState("Abdullah Sohail");
  const [date, setDate] = useState("DOB");

  return (
    <div className="container-fluid">
      <h1 className="text-center mt-5">Signature App</h1>
      
      <Title text={name} />
      <Title text={date} />
      
      <p>lorem1000 ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate. Molestias, voluptate! Molestias, voluptate! Molestias, voluptate! Molestias, voluptate! Voluptas</p>
      <div className="d-flex input-boxes">
        
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
