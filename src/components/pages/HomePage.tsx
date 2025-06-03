import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { increment, decrement } from "../../store/slices/usersSlice";
import { DashboardLayout } from "../templates/DashboardLayout";
import { WarehouseListTemplate } from "../templates/WarehouseListTemplate/WarehouseListTemplate";

const HomePage: React.FC = () => {
  const count = useAppSelector((state) => state.users.value);
  const dispatch = useAppDispatch();

  // we should fetch users here

  return <WarehouseListTemplate />;
};

export default HomePage;
