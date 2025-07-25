import styles from "./Table.module.scss";

const headers = [
  "Listing_id",
  "SKU",
  "Condition_id",
  "Product_id",
  "Title",
  "Price",
  "Listing_qty",
  "inventory",
];

const repeatedRow = [
  "325064386872",
  "SRQ/P,Ne_ME331X...",
  "UEG122535",
  "G122535",
  "3300 ANSI 3LCD Projector 1080p...",
  "114,27",
  "274",
  "3 376",
];

const data = Array.from({ length: 4 }, () => repeatedRow);

const Table = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th key={idx}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>
                {cellIndex === row.length - 1 ? (
                  <div className={styles.cellWithIcon}>
                    <span>{cell}</span>
                    
                  </div>
                ) : (
                  cell
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
