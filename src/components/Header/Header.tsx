import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <p>G112082</p>
        <button type="button">
          <img src="/icons/edit.svg" alt="Edit" />
          Edit
        </button>
      </div>
      <div className={styles.wrapBtn}>
        <button type="button">
          <img src="/icons/arrow-prev.svg" alt="Arrow prev" />
        </button>
        <button type="button">
          <img
            className={styles.icon}
            src="/icons/arrow-next.svg"
            alt="Arrow next"
          />
        </button>
        <button type="button">
          <img src="/icons/maximize.svg" alt="Maximize" />
        </button>
        <button type="button">
          <img src="/icons/close.svg" alt="Close" />
        </button>
      </div>
    </header>
  );
};

export default Header;
