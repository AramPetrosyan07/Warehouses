import { Text } from "../../atoms/typography/Text/Text";
import "./HeaderNav.scss";

export const HeaderNav = () => {
  return (
    <div className="header-nav">
      <div className="header-left">
        <Text
          variant="body1"
          weight="medium"
          customClassName="dark-blue-40"
          // customClassName={isActive ? "activeLabel" : "nav-label"}
        >
          Places
        </Text>
        <div>a</div>
      </div>
      <div className="header-right">
        <div className="languages">a</div>
        <div className="notifications">a</div>
        <div className="super-admin">a</div>
        <div className="disjunctive-line">a</div>
        <div className="logout">a</div>
      </div>
    </div>
  );
};
