import styles from "./Table.module.scss";

const headers: string[] = ["Original_id", "Same_id", "Fk_edit_employee"];

const repeatedRow: string[][] = [["G112082", "G900559", "Script"]];

const Table: React.FC = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header: string, i: number) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {repeatedRow.map((row: string[], rowIndex: number) => (
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
