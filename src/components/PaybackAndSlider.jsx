import styles from "./PaybackAndSlider.module.scss";
import { Range } from "react-range";
import { useMemo } from "react";

const PaybackAndSlider = ({ amount, payNowAmount, setPayNowAmount }) => {
  const percentAmt = useMemo(() => {
    return parseInt((payNowAmount / amount) * 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payNowAmount]);

  const gradientFn = () => {
    if (percentAmt <= 50) {
      return `linear-gradient(90deg, rgba(240,96,96,1) 0%, rgba(237,179,45,1) ${percentAmt}%, rgba(246,246,246,1) ${percentAmt}%)`;
    }
    return `linear-gradient(90deg, rgba(240,96,96,1) 0%,rgba(237,180,45,1) 50%, #75bb74 ${
      percentAmt < 60 ? percentAmt : 60
    }%,#75bb74 ${percentAmt}%, rgba(246,246,246,1) ${percentAmt}%)`;
  };

  const colorRange = () => {
    if (percentAmt < 33) {
      return `rgba(240,96,96,1)`;
    }
    if (percentAmt < 56) {
      return `rgba(237,180,45,1)`;
    }
    return "#75bb74";
  };

  return (
    <div className={styles.container}>
      <div className={styles.amounts}>
        <div className={styles.payNow}>
          <div className={styles.title}>Pay now</div>
          <div className={styles.amount}>$ {payNowAmount}</div>
        </div>
        <div className={styles.payLater}>
          <div className={styles.title}>Pay over time</div>
          <div className={styles.amount}>$ {amount - payNowAmount}</div>
        </div>
      </div>
      <div className={styles.slider}>
        <Range
          values={payNowAmount}
          step={100}
          min={0}
          max={amount - 100}
          rtl={false}
          onChange={(values) => setPayNowAmount(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "20px",
                  width: "100%",
                  borderRadius: "10px",
                  background: gradientFn(),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                outline: "none",
                height: "32px",
                width: "32px",
                borderRadius: "16px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "16px",
                  borderRadius: "8px",
                  backgroundColor: colorRange(),
                }}
              />
            </div>
          )}
        />
        <div className={styles.rangeAmt}>
          <div className={styles.minAmt}>$ 0.00</div>
          <div className={styles.maxAmt}>$ {parseFloat(amount).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default PaybackAndSlider;
