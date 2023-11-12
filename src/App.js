import React from 'react';
import './App.css';
//import ChatGPT from './ChatGT';
import {SearchBar} from "./components/SearchBar";

function App() {
  return (
    <div className="App">
    <div className="search-bar-container">
    <SearchBar/>
    <div>searchResults</div>
    </div>
    
    </div>
  );
}

export default App;
