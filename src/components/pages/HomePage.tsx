import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { increment, decrement } from "../../store/slices/usersSlice";
import { DashboardLayout } from "../templates/DashboardLayout";

const HomePage: React.FC = () => {
  const count = useAppSelector((state) => state.users.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Counter: {count}</p>

     
    </div>
  );
};

export default HomePage;
