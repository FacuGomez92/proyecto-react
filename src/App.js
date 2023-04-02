import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/Navbar";
import CartWidget from './components/CartWidget/CartWidget';
function App() {
  return (
    <>
    <div>
    <Navbar />
    <ItemListContainer/>
    <CartWidget/>
    </div>
    </>
  );
}

export default App;
