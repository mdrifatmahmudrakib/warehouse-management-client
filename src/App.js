import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Inventories from './Pages/Inventories/Inventories';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';

import AllInventories from './Pages/AllInventories/AllInventories';
import Reviews from './Pages/Reviews/Reviews';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/inventories' element={<Inventories></Inventories>}></Route>

        <Route path='/manageinventories' element={<AllInventories></AllInventories>}></Route>




        <Route path='/inventory/:inventoryId' element={
          <InventoryDetails></InventoryDetails>
        }></Route>

        <Route path="/review" element={<Reviews></Reviews>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
