import styles from "./Repayment.module.scss";
import RepaymentOption from "./RepaymentOption";

const Repayment = ({
  payNowAmount,
  amount,
  monthList,
  selectedMonth,
  setSelectedMonth,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Repayment option</div>
      <div className={styles.optionsContainer}>
        {monthList.map((el) => (
          <RepaymentOption
            monthQty={el}
            amount={amount}
            key={el}
            amt={payNowAmount}
            selected={selectedMonth === el}
            onChange={setSelectedMonth}
          />
        ))}
      </div>
      {/* <div className={styles.paragraph}>
        <p>
          This amount includes a Monthly Installment Fee of $18.75 for a Total
          Installment Fee of $168.75.
        </p>
        <p>With monthly AutoPay Savings of $5.00</p>
      </div> */}
      <div className={styles.continue}>
        <button className={styles.continueBtn}>Continue</button>
      </div>
    </div>
  );
};
export default Repayment;
