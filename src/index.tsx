import React from 'react';
import ReactDOM from "react-dom";

let array: string[];

let Welcome = () => { 
  return <h1>Hello</h1>; 
}

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Welcome/>
        Hello Worldaaa 
      </div>
    );
  }
}

ReactDOM.render(<MyComponent/>, document.getElementById('root'));
