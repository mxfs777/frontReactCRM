import { useState, createContext, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside';

import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Oportunities from './pages/Oportunities';
import Contacts from './pages/Contacts';
import Customers from './pages/Customers';
import authContext from './context/AuthContext';

const App = () => {
  const [ authData, setAuthData] = useState({});

  return (
    <BrowserRouter>
        <authContext.Provider value={{ authData, setAuthData }}>
          <div className="App">
            {
              (authData.authenticated) ?
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
        </authContext.Provider>
    </BrowserRouter>
  );
}

export default App;
