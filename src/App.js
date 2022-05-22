import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth";
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
import Navication from "./Sheard/Navication";
import ResetPassword from "./Pages/Login/ResetPassword"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Navication/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='home' element={<Home/>}/>
       <Route path='dashboard' element={<RequireAuth>
        <Dashboard/>
       </RequireAuth>}>
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
       <Route path='resetPassword' element={<ResetPassword/>}/>
       <Route path='register' element={<Register/>}/>
       <Route path='*' element={<NotFoundPage/>}/>
     </Routes>
     <ToastContainer/>
    </>
  );
}

export default App;
