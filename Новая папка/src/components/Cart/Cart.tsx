import cls from "./Cart.module.scss";
import { CartProps } from "../../mockData/types";
import CartItem, { Operation } from "../CartItem/CartItem.js";
import Payment from "../Payment/Payment.js";
import useLocalStorageState from "use-local-storage-state";

const Cart = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
  const getCart = () => Object.values(cart || {});

  const cartIsEmpty = Object.keys(cart || {}).length == 0;

  const totalPrice = getCart().reduce(
    (previousValue, currentItem) =>
      previousValue + currentItem.price * currentItem.count,
    0
  );

  const handleRemoveProduct = (productId: number): void => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleUpdateCount = (productId: number, operation: Operation) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (operation === "increase") {
          updatedCart[productId] = {
            ...updatedCart[productId],
            count: updatedCart[productId].count + 1,
          };
        } else {
          updatedCart[productId] = {
            ...updatedCart[productId],
            count: updatedCart[productId].count - 1,
          };
        }
      }
      return updatedCart;
    });
  };

  return (
    <div className={cls.cart}>
      <h2 className={cls.cartHeader}>Корзина</h2>
      <div className={cls.cartWrapper}>
        <ul className={cls.cartList}>
          {getCart().map(cartItem => (
            <CartItem
              removeProductCallback={() => handleRemoveProduct(cartItem.id)}
              handleUpdateCount={handleUpdateCount}
              cartItem={cartItem}
              key={cartItem.id}
            />
          ))}
        </ul>
        <Payment cartIsEmpty={cartIsEmpty} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
