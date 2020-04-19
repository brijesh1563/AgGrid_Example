import React from 'react';
import './App.css';
import GridDemo from './Components/GridDemo';
import GridExample from './Components/GridExample';
import '@elastic/eui/dist/eui_theme_light.css'


function App() {
  return (
    <div className="App">
  
       {/* <GridDemo/> */}
      <GridExample/>
    </div>
  );
}

export default App;
