import React from 'react';
import ReactDOM from "react-dom";
import Home from './containers/Home';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent/>, document.getElementById('root'));
