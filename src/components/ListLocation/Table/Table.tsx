import styles from "./Table.module.scss";

const headers: string[] = [
  "ID",
  "Brand",
  "Category",
  "Device P/N",
  "Gty",
  "Condition",
  "Edit User",
  "Notes",
];

const repeatedRow: string[] = [
  "G112082",
  "NEC",
  "Projectors",
  "CP34B",
  "52",
  "U/Ref",
  "Script",
  "No Lamp",
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
                    <button type="button">
                      <img
                        className={styles.icon}
                        src="/icons/more.svg"
                        alt="More"
                      />
                    </button>
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
