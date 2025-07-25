import styles from "./Table.module.scss";

const headers: string[] = [
  "Listing_id",
  "SKU",
  "Condition_id",
  "Product_id",
  "Title",
  "Price",
  "Listing_qty",
  "inventory",
];

const repeatedRow: string[] = [
  "325064386872",
  "SRQ/P,Ne_ME331X...",
  "UEG122535",
  "G122535",
  "3300 ANSI 3LCD Projector 1080p...",
  "114,27",
  "274",
  "3 376",
];

const data: string[][] = Array.from({ length: 4 }, () => repeatedRow);

const Table: React.FC = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header: string, idx: number) => (
            <th key={idx}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: string[], rowIndex: number) => (
          <tr key={rowIndex}>
            {row.map((cell: string, cellIndex: number) => (
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
