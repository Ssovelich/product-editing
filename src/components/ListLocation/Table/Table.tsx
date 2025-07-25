import styles from "./Table.module.scss";

const headers = [
  "ID",
  "Brand",
  "Category",
  "Device P/N",
  "Gty",
  "Condition",
  "Edit User",
  "Notes",
];

const repeatedRow = [
  "G112082",
  "NEC",
  "Projectors",
  "CP34B",
  "52",
  "U/Ref",
  "Script",
  "No Lamp",
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
