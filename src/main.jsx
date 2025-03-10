import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import RootLayout from "./components/RootLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Detail from "./pages/Detail.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import ProductForm from "./components/ProductForm.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/create" element ={<ProductForm/>}/>
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          {/* Add more routes here */}
          <Route path="/product-detail">
            <Route path=":id" element={<Detail />} />
          </Route>
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
