import { useState } from 'react';
import './App.css';

import SignIn from './pages/SignIn';

const App = () => {

  const [ logged, setLogged ] = useState(false);

  return (
    <div className="App">
      {
        (logged) ?
        (
          <h1></h1>
        ) :
        (
          <SignIn />
        )
      }
    </div>
  );
}

export default App;
