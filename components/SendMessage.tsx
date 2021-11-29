import React from "react"
import { getAuth } from "@firebase/auth"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { GetServerSideProps } from "next"
import { useRouter } from "next/dist/client/router"
import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { auth, db } from "../firebase"

function SendMessage() {
  const router = useRouter()
//   const auth = getAuth(app)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/")
    }
  }, [])

  function sendMessages(data: any) {
    const { uid, photoURL }: any = auth.currentUser
    const colRef = collection(db, "messages")
    addDoc(colRef, {
      uid,
      photoURL,
      title: data.message,
      createdAt: serverTimestamp(),
    }).then(() => {
      reset()
    })
  }
  return (
    <form action="" className="form" onSubmit={handleSubmit(sendMessages)}>
      <div className="form-group d-flex align-items-center">
        <input {...register("message", { required: "please enter message" })} className="form-control" style={{ width: "80%", display: "inline" }} type="text" name="message" placeholder="Enter Message" />
        <button className="btn btn-success ml-2"> send message</button>
      </div>
    </form>
  )
}

export default SendMessage
