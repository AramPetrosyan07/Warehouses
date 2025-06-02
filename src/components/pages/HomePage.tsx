import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { increment, decrement } from "../../store/slices/usersSlice";
import { Organization } from "../../assets/icons/sidebar/ordinary/Organization";
import { Roles } from "../../assets/icons/sidebar/ordinary/Roles";
import { Users } from "../../assets/icons/sidebar/ordinary/Users";
import { Workers } from "../../assets/icons/sidebar/ordinary/Workers";
import { Places } from "../../assets/icons/sidebar/ordinary/Places";
import { Products } from "../../assets/icons/sidebar/ordinary/Products";
import { Orders } from "../../assets/icons/sidebar/ordinary/Orders";
import { ScanHistory } from "../../assets/icons/sidebar/ordinary/ScanHistory";
import { SeletedOrders } from "../../assets/icons/sidebar/selected/SeletedOrders";
import { SeletedPlaces } from "../../assets/icons/sidebar/selected/SeletedPlaces";
import { SeletedOrganization } from "../../assets/icons/sidebar/selected/SeletedOrganization";
import { SeletedScanHistory } from "../../assets/icons/sidebar/selected/SeletedScanHistory";
import { SeletedUsers } from "../../assets/icons/sidebar/selected/SeletedUsers";
import { SeletedWorkers } from "../../assets/icons/sidebar/selected/SeletedWorkers";
import { SeletedRoles } from "../../assets/icons/sidebar/selected/SeletedRoles";
import { SeletedProducts } from "../../assets/icons/sidebar/selected/SeletedProducts";

const HomePage: React.FC = () => {
  const count = useAppSelector((state) => state.users.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Counter: {count}</p>
      <Organization />
      <Roles />
      <Users />
      <Workers />
      <Places />
      <Products />
      <Orders />
      <ScanHistory />
      <div>----------------------</div>
      <SeletedOrganization />
      <SeletedRoles />
      <SeletedUsers />
      <SeletedWorkers />
      <SeletedPlaces />
      <SeletedProducts />
      <SeletedOrders />
      <SeletedScanHistory />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default HomePage;
