import React from "react"
import styles from "../styles/Home.module.css"

function SendMessage({ handleSubmit, sendMessages, register }: any) {
  return (
    <form action="" className="form" onSubmit={handleSubmit(sendMessages)}>
      <div className="form-group d-flex align-items-center">
        <input {...register("message", { required: "please enter message" })} className={`form-control ${styles.form_input}`} type="text" name="message" placeholder="Enter Message" />
        <button className="btn btn-success ml-2"> send message</button>
      </div>
    </form>
  )
}

export default SendMessage
