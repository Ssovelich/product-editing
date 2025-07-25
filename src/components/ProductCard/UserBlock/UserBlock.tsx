import styles from "../ProductCard.module.scss";

interface InfoItem {
  label: string;
  value: string;
}

const dataUserBlock: InfoItem[] = [
  { label: "Sku", value: "???/P,Ne_P401W/??G112082" },
  { label: "L-user", value: "Iryna" },
  { label: "Category", value: "Projector" },
  { label: "E-User", value: "Script" },
  { label: "Green_id", value: "Y" },
  { label: "Edit_at", value: "30.8.2024 12:32" },
  { label: "Create_at", value: "30.8.2024 12:32" },
  { label: "Amazon Listing Src", value: "https://www.amazon.com..." },
  { label: "ELCCq", value: "0" },
  { label: "Amazq", value: "9" },
  { label: "Notes", value: "----------" },
];

const UserBlock: React.FC = () => {
  return (
    <div className={`${styles.block} ${styles.userBlock}`}>
      {dataUserBlock.map((item: InfoItem, i: number) => (
        <p key={i} className={styles.row}>
          <span className={styles.label}>{item.label}</span>
          <span
            className={`${styles.value} ${
              i === 7 || i === dataUserBlock.length - 1
                ? styles.specialValue
                : ""
            }`}
          >
            {item.value}
          </span>

          {i < 4 && (
            <button type="button">
              <img className={styles.icon} src="/icons/more.svg" alt="More" />
            </button>
          )}

          {i === 7 && (
            <button type="button">
              <img className={styles.icon} src="/icons/link.svg" alt="Link" />
            </button>
          )}
        </p>
      ))}
    </div>
  );
};

export default UserBlock;
