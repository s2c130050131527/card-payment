import { useState } from "react";
import styles from "./App.module.scss";
import GraphContainer from "./components/GraphContainer";
import PaybackAndSlider from "./components/PaybackAndSlider";
import TitleCard from "./components/TitleCard";
import { PayNowAmountContext, TotalAmountContext } from "./context";

function App() {
  const [amount, setAmount] = useState(10500);
  const [payNowAmount, setPayNowAmount] = useState([3000]);

  return (
    <TotalAmountContext.Provider
      value={{
        amount,
        setAmount,
      }}
    >
      <PayNowAmountContext.Provider
        value={{
          payNowAmount,
          setPayNowAmount,
        }}
      >
        <div className={styles.container}>
          <div className={styles.body}>
            <TitleCard />
            <GraphContainer />
            <PaybackAndSlider />
          </div>
        </div>
      </PayNowAmountContext.Provider>
    </TotalAmountContext.Provider>
  );
}

export default App;
