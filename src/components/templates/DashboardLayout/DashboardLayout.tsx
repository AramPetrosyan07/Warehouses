import React from "react";
import { Sidebar } from "../../organisms/Sidebar";
import { useSidebar } from "../../../hooks/useSidebar";
import { navigationItems } from "../../../config/navigation";
import "./DashboardLayout.scss";
import { MainLogo } from "../../../assets/icons/sidebar/ordinary/MainLogo";

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  className = "",
}) => {
  const { isCollapsed, activeItem, toggleCollapse, setActive } = useSidebar();

  const handleNavItemClick = (itemId: string) => {
    console.log("itemId", itemId);
    setActive(itemId);
  };

  const navItemsWithHandlers = navigationItems.map((item) => ({
    ...item,
    onClick: () => handleNavItemClick(item.id),
  }));

  return (
    <div className={`dashboard-layout ${className}`}>
      <Sidebar
        navItems={navItemsWithHandlers}
        activeItemId={activeItem}
        isCollapsed={isCollapsed}
        onToggleCollapse={toggleCollapse}
        // logoText="My Dashboard"
        logoIcon={<MainLogo isCollapsed={isCollapsed} />}
      />
      <main className="main-content">
        <div className="content-wrapper">{children}</div>
      </main>
    </div>
  );
};
