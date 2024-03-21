import cls from "./CartItem.module.scss";
import { ICartItem } from "../../mockData/types";
import { useState } from "react";

export type Operation = "decrease" | "increase";

interface CartItemProps {
  cartItem: ICartItem;
  removeProductCallback: (productId: number) => void;
  handleUpdateCount: (productId: number, operation: Operation) => void;
}

const CartItem = ({
  cartItem,
  removeProductCallback,
  handleUpdateCount,
}: CartItemProps) => {
  const [value, setValue] = useState<number>(cartItem.count);

  const reduce = (): void => {
    handleUpdateCount(cartItem.id, "decrease");
    setValue(prevState => {
      const updatedValue = prevState - 1;
      if (updatedValue === 0) {
        removeProductCallback(cartItem.id);
      }
      return updatedValue;
    });
  };
  const increase = (): void => {
    handleUpdateCount(cartItem.id, "increase");
    setValue(prevState => prevState + 1);
  };

  return (
    <li className={cls.cartItem}>
      <div className={cls.paddingWrapper}>
        <div className={cls.wrapper}>
          <div className={cls.info}>
            <img className={cls.image} src={cartItem.img} alt={cls.title} />
            <div className={cls.buyButtons}>
              <button onClick={reduce} className={cls.button}>
                <img src="src/assets/minus.svg" alt="" className={cls.btnImg} />
              </button>
              <p className={cls.count}>{value}</p>
              <button onClick={increase} className={cls.button}>
                <img src="src/assets/plus.svg" alt="" className={cls.btnImg} />
              </button>
            </div>
          </div>

          <div className={cls.title_price}>
            <p className={cls.title}>{cartItem.title}</p>
            <p className={cls.price}>{cartItem.price} &#8381; за 1 шт.</p>
          </div>

          <div className={cls.remove_sumPrice}>
            <button
              onClick={() => removeProductCallback(cartItem.id)}
              className={cls.remove}
            >
              <img src="src/assets/removeBtn.svg" alt="" />
            </button>
            <p className={cls.sumPrice}>
              {cartItem.price * cartItem.count} &#8381;
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
