import styles from "./PhotoBlock.module.scss";

const PhotoBlock: React.FC = () => {
  return (
    <div className={styles.photoBlock}>
      <div className={styles.wrap}>
        <p>Photo_device</p>
        <img src="/one.png" alt="Photo device" />
      </div>
      <div className={styles.wrap}>
        <p>Photo_data_plate</p>
        <img src="/two.png" alt="Photo data plate" />
      </div>
    </div>
  );
};

export default PhotoBlock;
