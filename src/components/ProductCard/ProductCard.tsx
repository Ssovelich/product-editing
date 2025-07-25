import InfoBlock from "./InfoBlock/InfoBlock";
import styles from "./ProductCard.module.scss";
import UserBlock from "./UserBlock/UserBlock";



const ProductCard = () => {
  return (
    <section className={styles.productCard}>
      <InfoBlock/>
      <UserBlock/>
    </section>
  );
};

export default ProductCard;
