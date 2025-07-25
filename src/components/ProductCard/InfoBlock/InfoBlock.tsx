import styles from "../ProductCard.module.scss";

const dataInfoBlock = [
  { label: "Brand", value: "NEC" },
  { label: "Model/Series", value: "P401W" },
  { label: "Devise P/N", value: "NP-P401W / NP23LP+" },
  { label: "Dev. Type", value: "2013,4000,1280,16:10,LCD" },
  { label: "RNK", value: "237" },
  { label: "Min price", value: "57,19" },
  { label: "Max price", value: "100,97" },
  { label: "Quantity", value: "3 376" },
  { label: "EPrq", value: "65" },
  { label: "EA4q", value: "6" },
  { label: "Photo_device", value: "https://drive.google.com..." },
];

const InfoBlock = () => {
  return (
    <div className={styles.block}>
      {dataInfoBlock.map((item, i) => (
        <p className={styles.row} key={i}>
          <span className={styles.label}>{item.label}</span>
          <span
            className={`${styles.value} ${
              i === dataInfoBlock.length - 1 ? styles.specialValue : ""
            }`}
          >
            {item.value}
          </span>

          {i === 0 && (
            <button type="button">
              <img className={styles.icon} src="/icons/more.svg" alt="More" />
            </button>
          )}
          {i === dataInfoBlock.length - 1 && (
            <button type="button">
              <img className={styles.icon} src="/icons/link.svg" alt="Link" />
            </button>
          )}
        </p>
      ))}
    </div>
  );
};

export default InfoBlock;
