import { User } from "@firebase/auth"
import React from "react"
import styles from "../styles/Home.module.css"

type Props = {
  messages?: Message[]
  user: User | null
  deleteMessage: Function
  scroll: any
}
type Message = {
  id: string
  title?: string
  photoURL?: string
  uid?: string
  email?: string
  createdAt?: string
}

export const Message: React.FC<Props> = ({ messages, user, deleteMessage, scroll }) => {
  return (
    <div className={styles.messages}>
      {messages?.map((message: any) => {
        return (
          <div key={message?.id} className={message.uid !== user?.uid ? styles.messages_send : styles.message_received}>
            <div className={message.uid !== user?.uid ? styles.messages_receiveContainer : styles.messages_sendContainer}>
              <img className={message.uid !== user?.uid ? styles.messages_receiveImage : styles.messages_sendImage} src={message.photoURL} alt="" />
              <h6 className={message.uid !== user?.uid ? styles.messages_receiveMessage : styles.messages_sendMessage}>{message?.title}</h6>
              {message.uid === user?.uid && (
                <button
                  className={styles.deleteMessage}
                  onClick={() => {
                    message.uid === user?.uid && deleteMessage(message?.id)
                  }}
                  name="Delete"
                >
                  <i className=" fas fa-trash"></i>
                </button>
              )}
            </div>
          </div>
        )
      })}
      <div ref={scroll}></div>
    </div>
  )
}
