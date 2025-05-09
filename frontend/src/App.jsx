import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import SearchResults from './components/Navbar/SearchResults';
import Search from './components/Navbar/Search'




const App = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
            <div className='app'>
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} /> {/* Corrected Path to path */}
                    <Route path='/order' element={<PlaceOrder />} />
                    <Route path='/search' element={<SearchResults />} />
                    <Route path="/search" element={<Search />} />

                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;
