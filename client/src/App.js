import './App.css';

import React, {useState, useEffect} from "react";
import Home from "./components/Home/Home.jsx"
import Posts from "./components/Posts/Posts.jsx"
import {BrowserRouter, Route} from 'react-router-dom';
import AddPost from './components/AddPost/AddPost'





function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/addPost" component={AddPost} />
        <Route exact path="/posts" component={Posts} />
      </BrowserRouter>
    </React.Fragment>
  );
}


export default App;
