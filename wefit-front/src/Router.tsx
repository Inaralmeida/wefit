import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/Cart";
import { GlobalStyle } from "./style/GlobalStyle";
import Header from "./components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
