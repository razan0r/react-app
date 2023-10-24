import Navbar from './comp/Navbar/Navbar.jsx';
import Footer from './comp/Footer/Footer.jsx';
import Products from './comp/Products/Products.jsx';


export default function App() {
  return (
    <div className='container vh-100'>
    <Navbar/>
    <Footer/>
    <Products/>
    </div>
  );
}

