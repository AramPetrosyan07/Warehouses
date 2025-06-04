import { ShortArrow } from "../../../assets/icons/warehouses/Arrow";
import { Logout } from "../../../assets/icons/warehouses/Logout";
import { Bell } from "../../atoms/Bell/Bell";
// import { Bell } from "../../../assets/icons/warehouses/Bell";
import { LanguageSelec } from "../../atoms/LanguageSelect/LanguageSelect";
import { Text } from "../../atoms/typography/Text/Text";
import "./HeaderNav.scss";

export const HeaderNav = () => {
  return (
    <div className="container">
      <div className="header-nav">
        <div className="header-left">
          <div className="places-divider">
            <Text
              variant="body1"
              weight="medium"
              customClassName="dark-blue-40"
            >
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
        {/*  */}
        <div className="header-right">
          <div className="languages">
            <LanguageSelec />
          </div>
          <Bell hasNotification={true} />
          <div className="user-profile-actions">
            <div className="super-admin">
              <Text
                variant="body1"
                weight="medium"
                // customClassName={"dark-blue-40"}
              >
                Super admin
              </Text>
            </div>
            <div className="disjunctive-line" />
            <div className="logout">
              <Text
                variant="body1"
                weight="medium"
                customClassName={"dark-blue-40"}
              >
                Logout
              </Text>
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
