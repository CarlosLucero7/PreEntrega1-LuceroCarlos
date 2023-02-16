import Navbar from './components/navbar/NavBar';
import Itemlistcontainer from "./components/itemlistcontainer/Itemlistcontainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Itemlistcontainer/>}/>

        <Route path='/itemDetail' element={<ItemDetailContainer/>}/>

        <Route path='/cart' element={Cart}/>

        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
