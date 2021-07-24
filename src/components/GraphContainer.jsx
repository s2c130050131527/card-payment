import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Chart from "./Chart";
import styles from "./GraphContainer.module.scss";

const INT_LIST = {
  3: 1.025,
  6: 1.05,
  9: 1.08,
};

const GraphContainer = ({ amount, payNowAmount, selectedMonth }) => {
  const [widthHeight, setWidthHeight] = useState({ width: 0, height: 0 });
  const parentRef = useRef(null);

  const setDimens = () => {
    if (parentRef.current) {
      setWidthHeight({
        width: parentRef.current.clientWidth,
        height: parentRef.current.clientHeight,
      });
    }
  };

  useEffect(() => {
    let resizedFn;
    window.addEventListener("resize", () => {
      clearTimeout(resizedFn);
      resizedFn = setTimeout(() => {
        setDimens();
      }, 200);
    });
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  useEffect(() => {
    setDimens();
  }, []);

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
      <div className={styles.boxOfGraph} ref={parentRef}>
        <Chart
          y={interest}
          x={selectedMonth}
          widthX={widthHeight.width}
          heightY={widthHeight.height}
        />
      </div>
    </div>
  );
};
export default GraphContainer;
