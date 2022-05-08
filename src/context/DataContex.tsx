import { useContext, createContext, FC } from "react";
import { db, onSnapshot, collection } from "../firebase/Firebase";
import ICRUDFunctions from "../interfaces/ICRUDFunctions";

const DataContext = createContext<ICRUDFunctions>({ onGetData: () => {} });

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider: FC = ({ children }) => {
  const onGetData = (
    collectionRef: string,
    callback: (querySnapshot: any) => void
  ) => {
    return onSnapshot(collection(db, collectionRef), callback);
  };

  const value = { onGetData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
