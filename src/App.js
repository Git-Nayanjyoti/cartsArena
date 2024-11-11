import './App.css';
import CartPage from './page/cartPage';
import React from 'react';
import Footer from './components/footer';

function App() {
  return (
    <div className="bg-white h-full font-poppins">
      <CartPage />
      <Footer />
    </div>
  );
}

export default App;
