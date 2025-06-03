import { useState } from 'react';

export const useSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Places');

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };

  const setActive = (itemId: string) => {
    setActiveItem(itemId);
  };

  return {
    isCollapsed,
    activeItem,
    toggleCollapse,
    setActive
  };
};