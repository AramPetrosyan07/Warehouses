import { ShortArrow } from "../../../assets/icons/warehouses/Arrow";
import { LanguageSelec } from "../../atoms/LanguageSelect/LanguageSelect";
import { Text } from "../../atoms/typography/Text/Text";
import "./HeaderNav.scss";

export const HeaderNav = () => {
  return (
    <div className="header-nav">
      <div className="header-left">
        <div className="places-divider">
          <Text variant="body1" weight="medium" customClassName="dark-blue-40">
            Places
          </Text>
          <ShortArrow />
        </div>
        <div className="warehouses-divider">
          <Text variant="h2" weight="medium">
            Warehouses
          </Text>
          <div className="warehouses-count">
            <Text
              variant="body1"
              weight="medium"
              customClassName={"dark-blue-40"}
            >
              200
            </Text>
          </div>
        </div>
      </div>
      <div className="header-right">
        <div className="languages">
          <LanguageSelec />
        </div>
        {/* <div className="notifications">a</div>
        <div className="super-admin">a</div>
        <div className="disjunctive-line">a</div>
        <div className="logout">a</div> */}
      </div>
    </div>
  );
};
