import React from 'react';
import Accordion from './component/accordion';
import { DATA_LIST } from './component/data'; 

function App() {
  return (
    <div className="App">
      <Accordion data={DATA_LIST} />
    </div>
  );
}

export default App;
