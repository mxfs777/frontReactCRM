import { useState } from 'react';
import './App.css';
import Aside from './components/Aside';

import SignIn from './pages/SignIn';

const App = () => {

  const [ logged, setLogged ] = useState(true);

  return (
    <div className="App">
      {
        (logged) ?
        (
          <>
            <Aside />
            <main className='main'>
              main
            </main>
          </>
        ) :
        (
          <SignIn />
        )
      }
    </div>
  );
}

export default App;
