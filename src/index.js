import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Navbar from './components/Navbar';
import NewPost from './components/NewPost';
import Post from './components/Post';

ReactDOM.render(
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={App} />
      <Route path="/post/:id" component={Post} />
      <Route path="/novo-post" component={NewPost} />
    </Fragment>
  </Router>,
  document.getElementById('root')
);
