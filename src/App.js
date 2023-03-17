import Navbar from './components/navbar/NavBar';
import Itemlistcontainer from "./components/itemlistcontainer/Itemlistcontainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from './components/Cart/Cart';
import CarContextProvider from './context/CarContext';

function App() {
  return (
    <BrowserRouter>
    <CarContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Itemlistcontainer/>}/>

        <Route path='/category/:categoryId' element={<Itemlistcontainer/>}/>

        <Route path='/item/:id' element={<ItemDetailContainer/>}/>

        <Route path='/Cart' element={<Cart/>}/>

        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>
    </CarContextProvider>
    </BrowserRouter>
  );
}

export default App;
