import React from 'react';
import ReactDOM from "react-dom";
import Gallery from './components/Gallery';
 
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Gallery/>
        Hello Worldaaa 
      </div>
    );
  }
}

ReactDOM.render(<MyComponent/>, document.getElementById('root'));
