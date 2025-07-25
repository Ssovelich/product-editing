import Table from "./Table/Table";
import styles from "./ListLocation.module.scss";

const ListLocation: React.FC = () => {
  return (
    <section className={styles.listLocation}>
      <p>
        List Location<span>6</span>
      </p>
      <Table />
    </section>
  );
};

export default ListLocation;
