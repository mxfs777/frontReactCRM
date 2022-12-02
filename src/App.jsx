import { useState, createContext, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useParams,useLocation } from 'react-router-dom';

import './App.scss';
import Aside from './components/Aside/Aside';

import SignIn from './pages/SignIn/SignIn';
import Companies from './pages/Companies/Companies';
import Oportunities from './pages/Oportunities/Oportunities';
import Contacts from './pages/Contact/Contacts';
import Customers from './pages/Customers/Customers';
import authContext from './context/AuthContext';

const App = () => {
  const [authData, setAuthData] = useState({});

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
                        path="/companies"
                        element={<Companies />}
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
