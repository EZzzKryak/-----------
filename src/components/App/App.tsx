import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import cls from "./App.module.scss";
import { Headphone } from "../../mockData/types";
import { ProductsContext } from "../../context/appContext";
// @ts-expect-error-ignore
import { headphones } from "../../mockData/products.js";
import { HashRouter } from "react-router-dom";
import { YMaps } from '@pbe/react-yandex-maps';

const App = () => {
  const [products, setProducts] = useState<Headphone[]>([]);
  // Имитация запроса на сервер
  useEffect(() => {
    setProducts(headphones);
  }, [products]);

  return (
    <HashRouter basename="/neoflex">
      <YMaps>
        <ProductsContext.Provider value={headphones}>
          <div className={cls.app}>
            <Header />
            <Main />
            <Footer />
          </div>
        </ProductsContext.Provider>
      </YMaps>
    </HashRouter>
  );
};

export default App;
