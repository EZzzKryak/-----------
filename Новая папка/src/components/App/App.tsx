import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import cls from "./App.module.scss";
import { Headphone } from "../../mockData/types";
import { ProductsContext } from "../../context/appContext";
// @ts-expect-error-ignore
import { data } from "../../mockData/products.js";
import { BrowserRouter } from "react-router-dom";
import { YMaps } from '@pbe/react-yandex-maps';

const App = () => {
  const [headphones, setHeadphones] = useState<Headphone[]>([]);
  // Имитация запроса на сервер
  useEffect(() => {
    setHeadphones(data);
  }, [headphones]);

  return (
    <BrowserRouter>
      <YMaps>
        <ProductsContext.Provider value={headphones}>
          <div className={cls.app}>
            <Header />
            <Main />
            <Footer />
          </div>
        </ProductsContext.Provider>
      </YMaps>
    </BrowserRouter>
  );
};

export default App;
