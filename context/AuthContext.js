"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (UserCredential) => {
        setDoc(doc(db, "users", UserCredential.user.uid), {
          uid: UserCredential.user.uid,
          displayName: UserCredential.user.displayName,
          email: UserCredential.user.email,
          photoURL: UserCredential.user.photoURL,
        });
      }
    );
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth);

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider).then((UserCredential) => {
      setDoc(doc(db, "users", UserCredential.user.uid), {
        uid: UserCredential.user.uid,
        displayName: UserCredential.user.displayName,
        email: UserCredential.user.email,
        photoURL: UserCredential.user.photoURL,
      });
    });
  };

  const loginWithFacebook = async () => {
    const facebookProvider = new FacebookAuthProvider();
    await signInWithPopup(auth, facebookProvider).then((UserCredential) => {
      setDoc(doc(db, "users", UserCredential.user.uid), {
        uid: UserCredential.user.uid,
        displayName: UserCredential.user.displayName,
        email: UserCredential.user.email,
        photoURL: UserCredential.user.photoURL,
      });
    });
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (UserCredential) => {
      if (UserCredential) {
        setUser(UserCredential);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        createUser,
        login,
        logout,
        loginWithGoogle,
        loginWithFacebook,
        resetPassword,
      }}
    >
      {isLoading ? <div>Cargando...</div> : children}
    </AuthContext.Provider>
  );
}
