import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import RouterCustom from './router';
import { CartProvider } from './pages/admin/Cartcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <CartProvider>  
<BrowserRouter>
<RouterCustom />
</BrowserRouter>
</CartProvider> 
);
