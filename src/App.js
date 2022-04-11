import { React, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { SubmitForm } from "./SubmitForm";

export default function App() {


  const [userLogin, setuserLogin] = useState(null)


  onAuthStateChanged(auth, (currentUser) => {
    setuserLogin(currentUser)
  })

  const signUp = async ({email, password}) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
    } catch(error) {
      console.log(error)
    }
  }

  const logIn = async ({email, password}) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
    } catch(error) {
      console.log(error)
    }
  }

  const logOut = async () => {
    await signOut(auth)
  }

  const loginOrSignUp = (e) => {
    setloginOrSignUp(e.target.text)
  }

  const [currentloginOrSignUp, setloginOrSignUp] = useState('Login')

  // console.log(currentloginOrSignUp)

  return (
    <>

      {!userLogin && (
        <div>
          <nav>
            <a href="#" onClick={loginOrSignUp}>Login</a> |
            <a href="#" onClick={loginOrSignUp}>Sign Up</a>
          </nav>

        </div>
      )}

      {userLogin && (<div>Current Login: {`${userLogin?.email}`} <button onClick={logOut}>Log Out</button></div>)}

      {!userLogin && (
        <SubmitForm
          whichForm={currentloginOrSignUp === 'Login' ? logIn : signUp}
          txtBtn={currentloginOrSignUp}
        />
      )}

    </>
  );
}
