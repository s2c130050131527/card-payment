import { useContext, useMemo } from "react";
import { TotalAmountContext } from "../context";
import styles from "./RepaymentOption.module.scss";

const INT_LIST = {
  3: 1.025,
  6: 1.05,
  9: 1.08,
};

const RepaymentOption = ({ monthQty, amt, selected, onChange }) => {
  const { amount } = useContext(TotalAmountContext);

  const amtDisp = useMemo(() => {
    return parseFloat(((amount - amt) * INT_LIST[monthQty]) / monthQty).toFixed(
      2
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthQty, amt]);
  return (
    <div className={styles.container} onClick={() => onChange(monthQty)}>
      <div className={styles.innerBtn} role="button" tabIndex="0">
        <div className={styles.monthTitle}>
          <span className={styles.monthQty}>{monthQty}</span>
          <span>&nbsp;Payments</span>
        </div>
        <div className={styles.amountDisp}>
          <span className={styles.amtBold}>$ {amtDisp.split(".")[0]}</span>
          <span>.{amtDisp.split(".")[1]}/M</span>
        </div>
      </div>
    </div>
  );
};
export default RepaymentOption;
