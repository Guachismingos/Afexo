import IData from "./IData";

interface ICRUDFunctions {
  stories: IData[];
  puberty: IData[];
  sex: IData[];
  relationships: IData[];
  consent: IData[];
  contraceptives: IData[];
  pregnacy: IData[];
  protectYourself: IData[];
  sexualOrientation: IData[];
  loading?: boolean;
}

export default ICRUDFunctions;
