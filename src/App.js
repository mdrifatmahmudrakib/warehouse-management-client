
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Inventories from './Pages/Inventories/Inventories';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';

// import AllInventories from './Pages/AllInventories/AllInventories';
import Reviews from './Pages/Reviews/Reviews';
import AddItem from './Pages/AddItem/AddItem';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/Login/RequireAuth/RequireAuth';
import MyItem from './Pages/MyItem/MyItem';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/inventories' element={<Inventories></Inventories>}></Route>


        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>}></Route>

        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>

        }></Route>

        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>



        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>

        <Route path='/inventory/:inventoryId' element={

          <RequireAuth>
            <InventoryDetails></InventoryDetails>
          </RequireAuth>
        }></Route>

        <Route path="/review" element={<Reviews></Reviews>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>



    </div>
  );
}

export default App;
