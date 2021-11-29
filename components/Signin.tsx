import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { auth } from "../firebase"

function Signin() {
    const router = useRouter()


  function signin (){
      const provider = new GoogleAuthProvider()

      signInWithPopup(auth,provider).then(result=>{
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        const user = result.user
        console.log(user)
        if(user){
            router.push('/chat')
        }
      })
  }
  return (
      <>
        <button className="btn btn-primary" onClick={signin}> Signin With Google</button>
      </>
  )
}

export default Signin
