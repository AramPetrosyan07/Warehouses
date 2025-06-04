import React, { useState, useRef } from "react";
import styles from "./NumberSelector.module.scss";
import { ShortArrow } from "../../../assets/icons/warehouses/Arrow";

const NumberSelector: React.FC = () => {
  const [value, setValue] = useState<number>(10);
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(Number(event.target.value));
    event.preventDefault();

    // Delay blur slightly to let the native dropdown handle selection first
    setTimeout(() => {
      selectRef.current?.blur();
    }, 0);
  };

  const handleDivClick = (): void => {
    const el = selectRef.current;
  };

  const options: number[] = Array.from({ length: 6 }, (_, i) => 10 + i);

  return (
    <div className={styles.numberSelector} onClick={handleDivClick}>
      <select
        ref={selectRef}
        value={value}
        onChange={handleChange}
        className={styles.nativeSelect}
      >
        {options.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <div className={styles.arrow}>
        <ShortArrow width={16} height={16} rotate={90} />
      </div>
    </div>
  );
};

export default NumberSelector;
