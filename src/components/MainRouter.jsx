import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProduct from "../pages/CreateProduct";
import CreateUser from "../pages/CreateUser";
import Dashboard from "../pages/Dashboard";

import Login from "../pages/Login";
import UserList from "../pages/UserList";
import MainLayout from "./MainLayout";

const MainRouter = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="user/create" element={<CreateUser />} />
                <Route path="user/all" element={<UserList />} />
                <Route path="product/create" element={<CreateProduct />} />
            </Route>

        </Routes>


    </BrowserRouter>);
}

export default MainRouter;