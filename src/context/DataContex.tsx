import { useContext, createContext, FC, useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase/Firebase";
import ICRUDFunctions from "../interfaces/ICRUDFunctions";
import IData from "../interfaces/IData";

const DataContext = createContext<ICRUDFunctions>({
  data: [],
});

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IData[][]>([]);
  const [collectionsRef] = useState(
    [
      "stories",
      "data/questions/puberty",
      "data/questions/sex",
      "data/questions/relationships",
      "data/questions/consent",
      "data/questions/contraceptives",
      "data/questions/pregnacy",
      "data/questions/protectyourself",
      "data/questions/sexualorientation",
    ]);

  const value = { data, loading };

  useEffect(() => {
    setLoading(true);
    const fetchData = async (collectionRef: string) => {
      const querySnapshot = await getDocs(collection(db, collectionRef));
      const docs: IData[] = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setData(dataRef => [...dataRef, docs]);
    };
    collectionsRef.forEach((collectionRef) => {
      fetchData(collectionRef);
    });

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [collectionsRef]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
