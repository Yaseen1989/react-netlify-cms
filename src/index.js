import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './index.css';
import "typeface-raleway"
import Home from "./pages/home"
import About from "./pages/about"
import Post from "./pages/post"
import NotFound from "./pages/notfound"

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/404" component={NotFound} />
            <Route path="/" component={Post} />
        </div>
    </Router>, 
    document.getElementById('root')
);


