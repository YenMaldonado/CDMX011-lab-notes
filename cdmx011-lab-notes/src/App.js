import React from 'react';
import './App.css';
import Home from './Components/Home';
import ScreenNotes from './Components/ScreenNotes';


function App() {
  const [usuario, setUsuario] = React.useState(null);

  return <>{usuario ? <ScreenNotes/>: <Home/>}</>;
}

export default App;
