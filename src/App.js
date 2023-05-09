import './styles/App.css'
import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";

function App() {
  const [value, setValue] = useState('Текст');


  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'Javascript', body: 'Description'}}/>
      <PostItem post={{id: 2, title: 'React', body: 'Description'}}/>
      <PostItem post={{id: 3, title: 'Redux', body: 'Description'}}/>
    </div>
  );
}

export default App;
