import { collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query } from "@firebase/firestore"
import React, { useEffect, useRef, useState } from "react"
import { auth, db } from "../firebase"
import { useRouter } from "next/dist/client/router"
import { useForm } from "react-hook-form"
import { Message } from "../components/Message"
import SendMessage from "../components/SendMessage"
import Signout from "../components/Signout"
import { addDoc, serverTimestamp } from "firebase/firestore"

export const ChatHOC = () => {
  const [messages, setMessages] = useState([])
  const scroll = useRef<null | HTMLDivElement>(null)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    const colRef = collection(db, "messages")
    const q = query(colRef, orderBy("createdAt"))
    onSnapshot(q, (snapshot) => {
      let messages: any = []
      snapshot.docs.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      setMessages(messages)
    })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    scroll.current?.scrollIntoView({ behavior: "smooth" })
  }
  //   send Messgae
  async function sendMessages(data: any) {
    const { uid, photoURL }: any = auth.currentUser
    const colRef = collection(db, "messages")
    console.log(data)
    await addDoc(colRef, {
      uid,
      photoURL,
      title: data.message,
      createdAt: serverTimestamp(),
    })
    reset()
  }

  function deleteMessage(id: string) {
    const docRef = doc(db, "messages", id)
    deleteDoc(docRef).then(() => {
      console.log("Message was deleted")
    })
  }

  // signout
  function signout() {
    auth.signOut()
    router.push("/")
  }

  return (
    <>
      <Signout signout={signout} />
      <Message messages={messages} deleteMessage={deleteMessage} user={auth?.currentUser} scroll={scroll} />
      <SendMessage handleSubmit={handleSubmit} sendMessages={sendMessages} register={register} />
    </>
  )
}
