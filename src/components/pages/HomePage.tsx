import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { increment, decrement } from "../../store/slices/usersSlice";
import { DashboardLayout } from "../templates/DashboardLayout";

const HomePage: React.FC = () => {
  const count = useAppSelector((state) => state.users.value);
  const dispatch = useAppDispatch();

  return (
    <DashboardLayout>
      <div>
        <h1>Home Page</h1>
        <p>Counter: {count}</p>

        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
