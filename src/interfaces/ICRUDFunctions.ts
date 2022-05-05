interface ICRUDFunctions {
  onGetData: (
    collectionRef: string,
    callback: (querySnapshot: any) => void
  ) => void;
}

export default ICRUDFunctions;
