import cls from "./CartItem.module.scss";
import { ICartItem, Operation } from "../../mockData/types";
import { memo, useState } from "react";

interface CartItemProps {
  cartItem: ICartItem;
  removeProductCallback: (id: number) => void;
  handleUpdateCount: (id: number, callback: Operation) => void;
}

const CartItem = memo(({
  cartItem,
  removeProductCallback,
  handleUpdateCount,
}: CartItemProps) => {
  const [value, setValue] = useState<number>(cartItem.count);

  const discountPrice = cartItem.price - cartItem.sale;
  const isDiscounted = cartItem.price > discountPrice;

  const reduce = (): void => {
    handleUpdateCount(cartItem.id, Operation.DEC);
    setValue(prevState => {
      const updatedValue = prevState - 1;
      if (updatedValue === 0) {
        removeProductCallback(cartItem.id);
      }
      return updatedValue;
    });
  };
  const increase = (): void => {
    handleUpdateCount(cartItem.id, Operation.INC);
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
            <p className={cls.price}>{isDiscounted ? discountPrice : cartItem.price} &#8381; за 1 шт.</p>
          </div>

          <div className={cls.remove_sumPrice}>
            <button
              onClick={() => removeProductCallback(cartItem.id)}
              className={cls.remove}
            >
              <img src="src/assets/removeBtn.svg" alt="" />
            </button>
            <p className={cls.sumPrice}>
              {isDiscounted ? discountPrice*cartItem.count : cartItem.price * cartItem.count} &#8381;
            </p>
          </div>
        </div>
      </div>
    </li>
  );
});

export default CartItem;
