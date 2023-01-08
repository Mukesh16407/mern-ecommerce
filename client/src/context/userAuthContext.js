import {createContext, useContext, useEffect, useState} from 'react';

import {createUserWithEmailAndPassword
,signInWithEmailAndPassword,signOut,
onAuthStateChanged} from 'firebase/auth'
import { auth } from '../firebase';

const userAuthContext = createContext();

export function userAuthContextProvider({children}){
      
    const [user, setUser] = useState("");

    function signUp(name,email,password) {
        return createUserWithEmailAndPassword(auth,name,email,password)
    }
    function logIn(email,password) {
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    return(
        <userAuthContext.Provider value={{user,signUp}} >
            {children}
        </userAuthContext.Provider>
    )

}

export function useUserAuth(){
    return(
        useContext(userAuthContext)
    )
}