import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './Page/CreatePage';
import EditPage from './Page/EditPage';
import List from './Page/List';
import Header from './Header';

function App() {
  const[products,setProducts]=useState([]);
  useEffect(()=>
    {
fetch("/data/product.json")
.then(res=>res.json())
.then(data=>setProducts(data))
    },[])
  return (
    
    <div className="container">
<Header></Header>
<Routes>
  
        <Route element={<CreatePage products={products} setProducts={setProducts}/>}  path='/create'/>
        <Route element={<EditPage/>}  path='/edit'/>
        <Route element={<List products={products} setProducts={setProducts}/>}  path='/list'/>
      </Routes>
    </div>
  );
}

export default App;
