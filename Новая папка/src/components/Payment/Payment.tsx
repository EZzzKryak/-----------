import cls from "./Payment.module.scss";

interface PaymentProps {
  totalPrice: number;
  cartIsEmpty: boolean;
}

const Payment = ({ totalPrice, cartIsEmpty }: PaymentProps) => {
  return (
    <div className={cls.payment}>
      <div className={cls.paymentStats}>
        <p className={cls.title}>Итого</p>
        <p className={cls.totalPrice}>{totalPrice} &#8381;</p>
      </div>
      <button disabled={cartIsEmpty} className={cls.paymentBtn}>Перейти к оформлению</button>
    </div>
  );
};

export default Payment;
