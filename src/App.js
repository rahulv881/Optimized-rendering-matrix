import logo from './logo.svg';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import Box from './components/Box';
import React, { createRef, useReducer, useRef } from 'react';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        {new Array(1000)?.fill()?.map((item, id) => 
            <Box 
            id={id} 
            key={id}
        />)}
    </div>
    </Provider>
  );
}

export default App;
