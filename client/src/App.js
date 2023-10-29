import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Nav/Header";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Home } from "./pages/Home/Home";
import { Footer } from "./Components/footer/Footer";
import { Reset } from "./pages/Auth/Reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import History from "./pages/user/History";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/WatchList";
import ProtectedRoute from "./Components/Routes/ProtectedRoute";
import AdminDashBoard from "./pages/Admin/AdminDashBoard";
import AdminRoute from "./Components/Routes/AdminRoute";
import CategoryCreate from "./pages/Admin/category/CategoryCreate";
import CategoryUpdate from "./pages/Admin/category/CategoryUpdate";
import SubCreate from "./pages/Admin/sub/SubCreate";
import SubUpdate from "./pages/Admin/sub/SubUpdate";
import { ProductCreate } from "./pages/Admin/product/ProductCreate";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          {/* <Route path="/user/history" element={<History />} /> */}

          <Route path="/user">
            <Route path="history" element={<History />} />
            <Route path="password" element={<Password />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
          <Route path="/admin">
            <Route
              path="dashboard"
              element={
                <AdminRoute>
                  <AdminDashBoard />
                </AdminRoute>
              }
            />
            <Route
              path="category"
              element={
                <AdminRoute>
                  <CategoryCreate />
                </AdminRoute>
              }
            />
            <Route
              path="category/:slug"
              element={
                <AdminRoute>
                  <CategoryUpdate />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/sub"
              element={
                <AdminRoute>
                  <SubCreate />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/sub/:slug"
              element={
                <AdminRoute>
                  <SubUpdate />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/product"
              element={
                <AdminRoute>
                  <ProductCreate />
                </AdminRoute>
              }
            />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
