import { Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import cls from "./Main.module.scss";
import Cart from "../Cart/Cart";
import Terms from "../Terms/Terms";
import Favorites from "../Favorites/Favorites";
import Contacts from "../Contacts/Contacts";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const Main = () => {
  return (
    <div className={cls.content}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default Main;
