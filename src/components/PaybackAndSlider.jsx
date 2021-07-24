import { useContext } from "react";
import { PayNowAmountContext, TotalAmountContext } from "../context";
import styles from "./PaybackAndSlider.module.scss";
import { Range } from "react-range";

const PaybackAndSlider = () => {
  const { amount } = useContext(TotalAmountContext);
  const { payNowAmount, setPayNowAmount } = useContext(PayNowAmountContext);

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
          step={1}
          min={0}
          max={amount}
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
                  background: `linear-gradient(90deg, rgba(240,96,96,1) 0%, rgba(237,179,45,1) ${parseInt(
                    (payNowAmount / amount) * 100
                  )}%, rgba(246,246,246,1) ${parseInt(
                    (payNowAmount / amount) * 100
                  )}%)`,
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
                  backgroundColor: "rgb(231,164,50)",
                }}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default PaybackAndSlider;
