import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import { ItemListContiner } from './components/ItemListContainer';

export default function App() {
  return (
  <div>
    <Navbar />
    <ItemListContiner saludo="Bienvenido a la tienda solidaria de la fundación" />
  </div>
  )
}
