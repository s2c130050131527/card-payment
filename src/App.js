import styles from "./App.module.scss";
import GraphContainer from "./components/GraphContainer";
import Header from "./components/Header";
import TitleCard from "./components/TitleCard";

function App() {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <div className={styles.body}>
        <TitleCard />
        <GraphContainer />
      </div>
    </div>
  );
}

export default App;
