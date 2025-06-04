import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { WarehouseListTemplate } from "../templates/WarehouseListTemplate/WarehouseListTemplate";
import { getUsers } from "../../store/thunks/usersThunks";

const HomePage: React.FC = () => {
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // we should fetch users here

  return <WarehouseListTemplate />;
};

export default HomePage;
