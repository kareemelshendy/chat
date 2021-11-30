import Message from "../../components/Message"
import SendMessage from "../../components/SendMessage"
import Signout from "../../components/Signout"
import Head from 'next/head'

function Chat() {
  return (
    <>
    <Head>
      <title>
        ChatApp | Chat
      </title>
    </Head>
      <div className="container mt-4">
        <Signout />
        <Message />
        <SendMessage />
      </div>
    </>
  )
}

export default Chat
