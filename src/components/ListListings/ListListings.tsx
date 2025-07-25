import Table from "./Table/Table";
import styles from "./ListListings.module.scss"

const ListListings = () => {
  return (
    <section className={styles.listListings}>
      <p>List Ebay Vision Listings<span>53</span></p>
      <Table />
    </section>
  );
};

export default ListListings;
