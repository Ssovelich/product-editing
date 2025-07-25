import styles from "../ProductCard.module.scss";

const dataUserBlock = [
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

const UserBlock = () => {
  return (
    <div className={`${styles.block} ${styles.userBlock}`}>
      {dataUserBlock.map((item, idx) => (
        <p key={idx} className={styles.row}>
          <span>{item.label}</span>
          <span>{item.value}</span>

          {idx < 4 && (
            <button type="button">
              <img
                className={styles.icon}
                src="/icons/more.svg" alt="More"
              />
            </button>
          )}

          {idx === 7 && (
            <button type="button">
              <img
                className={styles.icon}
                src="/icons/link.svg" alt="Link"
              />
            </button>
          )}
        </p>
      ))}
    </div>
  );
};

export default UserBlock;
