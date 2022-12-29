import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../Firebase/Firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    const  [user,setUser] = useState({});
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(curentUser) =>{
            setUser(curentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const info = {user,createUser,signIn,logOut}
    return (
        <AuthContext.Provider value= {info}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;