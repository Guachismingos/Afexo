import IData from "./IData";
import Story from "./Story";

interface ICRUDFunctions {
  data: Story[] | IData[];
  handleSetCollectionRef: (collectionRef: string) => void;
  loading?: boolean;
}

export default ICRUDFunctions;
