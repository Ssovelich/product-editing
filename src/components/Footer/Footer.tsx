import Table from "./Table/Table";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <p>
        Same Products<span>1</span>
      </p>
      <Table />
      <div className={styles.wrapBtn}>
        <button type="button">Expand</button>
        <button type="button">Add</button>
      </div>
    </section>
  );
};

export default Footer;
