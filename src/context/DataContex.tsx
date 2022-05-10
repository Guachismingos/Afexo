import { useContext, createContext, FC, useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase/Firebase";
import ICRUDFunctions from "../interfaces/ICRUDFunctions";
import IData from "../interfaces/IData";

const DataContext = createContext<ICRUDFunctions>({
  data: [],
  handleSetCollectionRef: () => {},
});

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [collectionRef, setCollectionRef] = useState("null");
  const [data, setData] = useState<IData[]>([]);

  const handleSetCollectionRef = (collectionRef: string) =>
    setCollectionRef(collectionRef);

  const value = { data, handleSetCollectionRef, loading };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, collectionRef));
      const docs: IData[] = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setData(docs);
    };
    fetchData();

    const fetch = async () => {
      const querySnapshot = await getDocs(collection(db, "data/questions/puberty"));
      const docs: IData[] = [];
      
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        
        docs.push({ ...doc.data(), id: doc.id });
      });
      
    };
    fetch();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [collectionRef]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
