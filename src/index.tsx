import React from 'react';
import ReactDOM from "react-dom";
import Gallery from './components/Gallery';
import Footer from './components/Footer';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Gallery/>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent/>, document.getElementById('root'));
