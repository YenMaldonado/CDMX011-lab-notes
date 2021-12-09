import React from 'react';
import './App.css';
import Home from './Components/Home.js';
import ScreenNotes from './Components/ScreenNotes.js';


function App() {
  const [usuario, setUser] = React.useState(null);

  return <>{usuario ? <ScreenNotes/>: <Home setUser = {setUser} />}</>;
}

export default App;
