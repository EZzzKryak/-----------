import cls from "./Cart.module.scss";
import { CartProps, Operation } from "../../mockData/types";
import CartItem from "../CartItem/CartItem.js";
import Payment from "../Payment/Payment.js";
import useLocalStorageState from "use-local-storage-state";
import { useCallback, useMemo } from "react";


const Cart = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
  const getCart = useCallback(() => Object.values(cart || {}), [cart]);

  const cartIsEmpty = useMemo(() => Object.keys(cart || {}).length == 0, [cart]);

  // Мб преобразовывать данные с учётом скидки где-то сверху, чтобы не пересчитывать каждый раз
  const totalPrice = useMemo(() => getCart().reduce(
    (previousValue, currentItem) => {
      if(currentItem.sale > 0) {
        const discountPrice = currentItem.price - currentItem.sale;
        return previousValue + discountPrice * currentItem.count;
      } else {
        return previousValue + currentItem.price * currentItem.count;
      }
    }, 0
  ), [getCart]);

  const handleRemoveProduct = useCallback((id: number): void => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      delete updatedCart[id];
      return updatedCart;
    });
  }, [setCart]);

  const handleUpdateCount = useCallback((id: number, callback: Operation) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id]) {
        if (callback === Operation.INC) {
          updatedCart[id] = {
            ...updatedCart[id],
            count: updatedCart[id].count + 1,
          };
        } else {
          updatedCart[id] = {
            ...updatedCart[id],
            count: updatedCart[id].count - 1,
          };
        }
      }
      return updatedCart;
    });
  }, [setCart]);

  return (
    <section className={cls.cart}>
      <h2 className={cls.cartHeader}>Корзина</h2>
      <div className={cls.cartWrapper}>
      {getCart().length > 0 ? (
        <ul className={cls.cartList}>
        {getCart().map(cartItem => (
          <CartItem
            removeProductCallback={() => handleRemoveProduct(cartItem.id)}
            handleUpdateCount={handleUpdateCount}
            cartItem={cartItem}
            key={cartItem.id}
          />))}
      </ul>
      ) : <div className={cls.emptyCart}>Корзина пуста</div>}

        <Payment cartIsEmpty={cartIsEmpty} totalPrice={totalPrice} />
      </div>
    </section>
  );
};

export default Cart;
