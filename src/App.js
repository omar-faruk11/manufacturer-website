import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import AddProduct from "./Pages/Dashboard/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='home' element={<Home/>}/>
       <Route path='dashboard' element={<Dashboard></Dashboard>}>
         <Route path='myorder' element={<MyOrders/>}/>
         <Route path='addreview' element={<AddReview/>}/>
         <Route path='myprofile' element={<MyProfile/>}/>
         <Route path='manageorders' element={<ManageAllOrders/>}/>
         <Route path='addproduct' element={<AddProduct/>}/>
         <Route path='makeadmin' element={<MakeAdmin/>}/>
         <Route path='manageproducts' element={<ManageProducts/>}/>
       </Route>
       <Route path='blogs' element={<Blogs/>}/>
       <Route path='myportfolio' element={<MyPortfolio/>}/>
       <Route path='login' element={<Login/>}/>
       <Route path='register' element={<Register/>}/>
       <Route path='*' element={<NotFoundPage/>}/>
     </Routes>
    </>
  );
}

export default App;
