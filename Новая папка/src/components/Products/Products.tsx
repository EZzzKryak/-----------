import { useContext } from "react";
import { ProductsContext } from "../../context/appContext";
import Product from "../Product/Product";
import cls from "./Products.module.scss";
import { CartProps, Headphone } from "../../mockData/types";
import useLocalStorageState from "use-local-storage-state";

const Products = () => {
  const products = useContext(ProductsContext);
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});

  const isInCart = (productId: number): boolean =>
    Object.keys(cart || {}).includes(productId.toString());

  const addProductToCart = (product: Headphone): void => {
    product.count = 1;
    setCart(prevCart => ({
      ...prevCart,
      [product.id]: product,
    }));
  };

  return (
    <>
      <h2 className={cls.headCategory}>Наушники</h2>
      <div className={cls.productsList}>
        {products?.map(product => (
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
