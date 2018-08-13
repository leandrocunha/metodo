import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Posts from './Posts';
import './../sass/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Breadcrumb items={[{ item: 'Home', url: '/' }]} />
        <Posts />
      </div>
    );
  }
}

export default App;
