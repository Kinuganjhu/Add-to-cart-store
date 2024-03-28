import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Pages/Home'
import './App.css';
import Details from './Pages/Details'
import Cart from './Pages/Cart'
export default function App() {
  return(
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Details/:id' element={<Details />} />
    <Route path='/Cart' element={<Cart />} />
  <Route path ='*' element ={<h1>Page Not Found</h1>}/>
    </Routes>
    </Router> < />
  )
}