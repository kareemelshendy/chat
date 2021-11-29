import { collection, getDocs, onSnapshot, orderBy, query } from "@firebase/firestore"
import React, { useEffect, useRef, useState } from "react"
import { auth, db } from "../firebase"
import styles from "../styles/Home.module.css"
export default function Message() {
  const [messages, setMessages] = useState([])
  const scroll = useRef<null | HTMLDivElement>(null)

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
  return (
    <div className={styles.messages}>
      {messages.map((message: any) => {
        return (
          <div key={message?.id} className={message.uid !== auth.currentUser?.uid ? styles.messages_send : styles.message_received}>
            <div className={message.uid !== auth.currentUser?.uid ? styles.messages_receiveContainer : styles.messages_sendContainer}>
              <img className={message.uid !== auth.currentUser?.uid ? styles.messages_receiveImage : styles.messages_sendImage} src={message.photoURL} alt="" />
              <h6 className={message.uid !== auth.currentUser?.uid ? styles.messages_receiveMessage : styles.messages_sendMessage}>{message?.title}</h6>
            </div>
          </div>
        )
      })}
      <div ref={scroll}></div>
    </div>
  )
}
