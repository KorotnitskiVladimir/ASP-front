import './App.css'
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './views/home/home'
import Layout from './views/layout/Layout'
import Category from './views/category/Category'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='category/:id' element={<Category />} />
        </Route>
      </Routes>
    </Router>
  )
}

