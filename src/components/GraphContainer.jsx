import Chart from "./Chart";
import styles from "./GraphContainer.module.scss";

const INT_LIST = {
  3: 1.025,
  6: 1.05,
  9: 1.08,
};

const GraphContainer = ({ amount, payNowAmount, selectedMonth }) => {
  const payLaterAmount = amount - payNowAmount;
  const payLaterAmountWithInt = parseFloat(
    payLaterAmount * INT_LIST[selectedMonth]
  );
  const interest = parseFloat(payLaterAmountWithInt - payLaterAmount).toFixed(
    2
  );
  return (
    <div className={styles.container}>
      <div className={styles.title}>Total Finance Charge</div>
      <div className={styles.boxOfGraph}>
        <Chart y={interest} x={selectedMonth} />
      </div>
    </div>
  );
};
export default GraphContainer;
