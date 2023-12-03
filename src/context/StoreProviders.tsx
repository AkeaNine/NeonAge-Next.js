"use client";
import { store } from "../app/redux/store";
import { Provider } from "react-redux";

interface StoreProvidersProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: StoreProvidersProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
