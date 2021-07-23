import styles from "./GraphContainer.module.scss";

const GraphContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Total Finance Charge</div>
      <div className={styles.boxOfGraph}>graph will be here</div>
    </div>
  );
};
export default GraphContainer;
