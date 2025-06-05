import { Button } from "../../atoms/Button/Button";
import Export from "../../atoms/Export/Export";
import { Listcard } from "../../atoms/ListCard/Listcard";
import NumberSelector from "../../atoms/NumberSelector/NumberSelector";
import { Text } from "../../atoms/typography/Text/Text";
import { SearchComponent } from "../SearchBar/SearchComponent";
import styles from "./TableController.module.scss";

const TableController = ({ setSelected, selected }: any) => {
  return (
    <div>
      <SearchComponent />
      <div className={styles.container}>
        <div className={styles.left_controller}>
          <div className={styles.table_controller}>
            <Text
              variant="caption"
              weight="regular"
              customClassName={styles.dark_blue_90}
            >
              Show
            </Text>
            <NumberSelector />
          </div>
          <div className={styles.export}>
            <Export />
          </div>
        </div>
        <div className={styles.right_controller}>
          <div className={styles.table_controller}>
            <Listcard setSelected={setSelected} selected={selected} />
          </div>
          <div className={styles.table_controller}>
            <Button
              text="Create Warehouse"
              onClick={() => {}}
              className={styles.create_warehouse}
              textClassName={styles.create_warehouse_text}
              variant="body2"
              weight="medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableController;
