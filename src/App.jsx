import './App.css'
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './views/home/home'
import Layout from './views/layout/Layout'
import Category from './views/category/Category'
import { AppContext } from './AppContext'
import Product from './views/product/Product'

export default function App() {

  const request = (url, conf) => new Promise((resolve, reject) => {
      if(url.startsWith('/')){
          url = "http://localhost:5089" + url;
      }
      fetch(url, conf)
      .then(r => r.json())
      .then(j => {
          if(j.status.isOk) {
              resolve(j.data);
          }
          else {
              reject(j);
          }
      });
  });

  return (
    <AppContext.Provider value={{request}}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='category/:id' element={<Category />} />
            <Route path='product/:id' element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}

