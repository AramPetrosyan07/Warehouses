export interface NavItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  active?:  React.ReactNode;
  onClick?: () => void;
  
}