import IData from "./IData";

interface ICRUDFunctions {
  data: IData[];
  handleSetCollectionRef: (collectionRef: string) => void;
  loading?: boolean;
}

export default ICRUDFunctions;
