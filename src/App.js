import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { store } from './reduxPrac/store';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {

  return (
    <Provider store={store}>

      <BrowserRouter>
        <Navbar />
        <Dashboard />
        <Footer />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
