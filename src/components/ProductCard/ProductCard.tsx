import InfoBlock from "./InfoBlock/InfoBlock";
import PhotoBlock from "./PhotoBlock/PhotoBlock";
import styles from "./ProductCard.module.scss";
import UserBlock from "./UserBlock/UserBlock";



const ProductCard = () => {
  return (
    <section className={styles.productCard}>
      <InfoBlock/>
      <UserBlock/>
      <PhotoBlock/>
    </section>
  );
};

export default ProductCard;
