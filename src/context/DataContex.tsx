import { useContext, createContext, FC } from "react";
import { db, onSnapshot, collection } from "../firebase/Firebase";

export interface ICRUDFunctions {
  onGetData: (
    collectionRef: string,
    callback: (querySnapshot: any) => void
  ) => void;
}

const DataContex = createContext<ICRUDFunctions>({ onGetData: () => {} });

export const useData = () => {
  return useContext(DataContex);
};

export const DataProvider: FC = ({ children }) => {
  const onGetData = (
    collectionRef: string,
    callback: (querySnapshot: any) => void
  ) => {
    const unsub = onSnapshot(collection(db, collectionRef), callback);
    return unsub;
  };

  const value = { onGetData };

  return <DataContex.Provider value={value}>{children}</DataContex.Provider>;
};

// import { User, UserCredential } from "firebase/auth";
// import { auth, signInWithEmailAndPassword } from "../firebase/Firebase";
// import { useContext, useState, useEffect, createContext, FC } from "react";

// export interface IAuth {
//   currentUser: User | null;
//   singIn: (email: string, password: string) => void;
//   logOut: () => void;
// }

// const AuthContex = createContext<IAuth>({
//   currentUser: null,
//   singIn: () => {},
//   logOut: () => {},
// });

// export const useAuth = () => {
//   return useContext(AuthContex);
// };

// export const AuthProvider: FC = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState<User | null>(null);

//   const [loading, setLoading] = useState(true);

//   const singIn = (email: string, password: string) =>
//     signInWithEmailAndPassword(auth, email, password);

//   const logOut = () => {
//     auth.signOut();
//   };

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     singIn,
//     logOut,
//   };

//   return (
//     <AuthContex.Provider value={value}>
//       {!loading && children}
//     </AuthContex.Provider>
//   );
// };
