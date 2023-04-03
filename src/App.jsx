import React, { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import ProductList from './components/productList/ProductList';
import ProductItem from './components/ProductItem/ProductItem';
import './App.css';
import Navbar from './components/navbar/Navbar';
import db from '../db/firebase.config';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const productosCollectionref = collection(db, 'productos');

  const getProductos = async () => {
    const productosSnapshot = await getDocs(productosCollectionref);
    setProductos(
      productosSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getProductos();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <body>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <div>
        <div className='titulos'>
          <h1 className='text-center title'>FABY SPORTS</h1>
        </div>
        <Routes>
          <Route path='/' element={<Navigate to='Home' />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/productos' element={<ProductList productos={productos} />} />
          <Route path='/productos/:id' element={<ProductItem productos={productos} />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
