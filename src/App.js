import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside';

import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Oportunities from './pages/Oportunities';
import Contacts from './pages/Contacts';
import Customers from './pages/Customers';

const App = () => {

  const [ logged, setLogged ] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        {
          (logged) ?
          (
            <>
              <Aside />
              <main className='main'>
                <Routes>                    
                  <Route
                    path="/profile"
                    element={<Profile />}
                    />               
                  <Route
                    path="/contacts"
                    element={<Contacts />}
                    />                          
                  <Route
                    path="/oportunities"
                    element={<Oportunities />}
                    />                            
                  <Route
                    path="/customers"
                    element={<Customers />}
                    />            
                </Routes>
              </main>
            </>
          ) :
          (
            <SignIn />
          )
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
