import {
  useContext,
  createContext,
  FC,
  useEffect,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { db, collection, getDocs } from "../firebase/Firebase";
import ICRUDFunctions from "../interfaces/ICRUDFunctions";
import IData from "../interfaces/IData";

const DataContext = createContext<ICRUDFunctions>({
  stories: [],
  puberty: [],
  sex: [],
  relationships: [],
  consent: [],
  contraceptives: [],
  pregnacy: [],
  protectYourself: [],
  sexualOrientation: [],
});

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<IData[]>([]);
  const [puberty, setPuberty] = useState<IData[]>([]);
  const [sex, setSex] = useState<IData[]>([]);
  const [relationships, setRelationships] = useState<IData[]>([]);
  const [consent, setConsent] = useState<IData[]>([]);
  const [contraceptives, setContraceptives] = useState<IData[]>([]);
  const [pregnacy, setPregnacy] = useState<IData[]>([]);
  const [protectYourself, setProtectYourself] = useState<IData[]>([]);
  const [sexualOrientation, setSexualOrientation] = useState<IData[]>([]);

  const value = {
    stories,
    loading,
    puberty,
    sex,
    relationships,
    consent,
    contraceptives,
    pregnacy,
    protectYourself,
    sexualOrientation,
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async (
      collectionRef: string,
      set: Dispatch<SetStateAction<IData[]>>
    ) => {
      const querySnapshot = await getDocs(collection(db, collectionRef));
      const docs: IData[] = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      set(docs);
    };
    setTimeout(() => {
      fetchData("stories", setStories);
      fetchData("data/questions/puberty", setPuberty);
      fetchData("data/questions/sex", setSex);
      fetchData("data/questions/relationships", setRelationships);
      fetchData("data/questions/consent", setConsent);
      fetchData("data/questions/contraceptives", setContraceptives);
      fetchData("data/questions/pregnacy", setPregnacy);
      fetchData("data/questions/protectyourself", setProtectYourself);
      fetchData("data/questions/sexualorientation", setSexualOrientation);
      setLoading(false);
    }, 500);
  }, []);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
