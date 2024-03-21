import { useContext, useMemo } from "react";
import { ProductsContext } from "../../context/appContext";
import Product from "../Product/Product";
import cls from "./Products.module.scss";
import { CartProps, Headphone } from "../../mockData/types";
import useLocalStorageState from "use-local-storage-state";

const Products = () => {
  const products = useContext(ProductsContext);
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});

  const isInCart = useMemo(() => (id: number): boolean =>
    Object.keys(cart || {}).includes(id.toString()), [cart]);

  const addProductToCart = useMemo(() => (product: Headphone): void => {
    product.count = 1;
    setCart(prevCart => ({
      ...prevCart,
      [product.id]: product,
    }));
  }, [setCart]);

  return (
    // Можно создать массив категорий из enam, мапить по нему и рендерить компоненты в зависимости от этих категорий.
    // Кода будет меньше, он будет нагляднее, но получится цикл в цикле (n^2) -
    // Проход по enam и внутри него проход по товарам, чтобы проверить принадлежность к текущей категории.

    // Либо разбивать все товары по категориям где-то выше и прокидывать несколько стейтов с готовыми категориями товаров (много кода).
    // Либо хранить в БД товары уже отдельно по категориям.
    <>
      <h2 className={cls.headCategory}>Наушники-вкладыши</h2>
      <div className={cls.productsList}>
        {products?.filter((product: Headphone) => product.category === 'in-ear')
        .map(product => (
          <Product
            product={product}
            key={product.id}
            addProductToCart={addProductToCart}
            isInCart={isInCart}
          />
        ))}
      </div>
      <h2 className={cls.headCategory}>Накладные наушники</h2>
      <div className={cls.productsList}>
      {products?.filter((product: Headphone) => product.category === 'headband')
        .map(product => (
          <Product
            product={product}
            key={product.id}
            addProductToCart={addProductToCart}
            isInCart={isInCart}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
