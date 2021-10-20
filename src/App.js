import React, { useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from 'react-router-dom'
import HomePage from './pages/HomePage';
import CreateCharacterPage from './pages/CreateCharacterPage';
import Navbar from './components/Navbar';
import ThemeContext from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute'
import AuthContext from './context/AuthContext';

function App() {
  const themeHook = useState('dark');
  return (
    <div className="App">
      <AuthContext.Provider value={true}>
      <ThemeContext.Provider value={themeHook}>
      <Router>
        <Navbar/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/create-character">
          <CreateCharacterPage/>
        </Route>
        <ProtectedRoute path = "/protected">
          <h1>This is protected route</h1>
        </ProtectedRoute>
        <ProtectedRoute path = "/admin">
          <h1>Admin</h1>
        </ProtectedRoute>
        <Route path="*">
          <h1>Sorry, the page you were looking for does not exist</h1>

        </Route>
      </Switch>
      </Router>
      </ThemeContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
