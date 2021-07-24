import { useState } from "react";
import styles from "./App.module.scss";
import GraphContainer from "./components/GraphContainer";
import PaybackAndSlider from "./components/PaybackAndSlider";
import Repayment from "./components/Repayment";
import TitleCard from "./components/TitleCard";

const amount = 10500;
const MONTHS = [3, 6, 9];

function App() {
  const [payNowAmount, setPayNowAmount] = useState([3000]);
  const [selectedMonth, setSelectedMonth] = useState(MONTHS[0]);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <TitleCard />
        <GraphContainer
          amount={amount}
          payNowAmount={payNowAmount}
          selectedMonth={selectedMonth}
        />
        <PaybackAndSlider
          payNowAmount={payNowAmount}
          setPayNowAmount={setPayNowAmount}
          amount={amount}
        />
        <Repayment
          payNowAmount={payNowAmount}
          amount={amount}
          monthList={MONTHS}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
      </div>
    </div>
  );
}

export default App;
