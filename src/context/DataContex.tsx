import { useContext, createContext, FC } from "react";
import { db, onSnapshot, collection } from "../firebase/Firebase";
import ICRUDFunctions from "../interfaces/ICRUDFunctions";

const DataContex = createContext<ICRUDFunctions>({ onGetData: () => {} });

export const useData = () => {
  return useContext(DataContex);
};

export const DataProvider: FC = ({ children }) => {
  const onGetData = (
    collectionRef: string,
    callback: (querySnapshot: any) => void
  ) => {
    return onSnapshot(collection(db, collectionRef), callback);
  };

  const value = { onGetData };

  return <DataContex.Provider value={value}>{children}</DataContex.Provider>;
};
