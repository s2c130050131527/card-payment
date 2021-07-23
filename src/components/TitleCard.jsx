import styles from "./TitleCard.module.scss";

const TitleCard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Pay card balance</div>
        <div className={styles.subTitle}>
          Pay off part of the balance now and convert the rest into a loan. Pay
          it over time with fixed installments.
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.title}>Card balance</div>
        <div className={styles.amount}>$ 10,500.00</div>
      </div>
    </>
  );
};
export default TitleCard;
