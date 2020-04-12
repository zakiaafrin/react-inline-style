import React, { Component } from 'react';
import './App.css';   // style

class App extends Component {

  render() {
    let obj = {
      padding: '30px',
      textAlign: 'right',
      fontFamily: 'Arial',
      fontSize: '100px'
    }

    return (
      <div className='App'>
        {/* <h1 style={{ padding: '30px', 
                 textAlign: 'right', 
                        fontFamily: 'Arial', 
                        fontSize: '100px' }}> */}
        <h1 style={obj}>
          Hello React
       </h1>
      </div>
    );
  }
}

export default App;