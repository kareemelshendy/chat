import Message from "../../components/Message"
import SendMessage from "../../components/SendMessage"
import Signout from "../../components/Signout"

function Chat() {
  return (
    <>
      <div className="container mt-4">
        <Signout />
        <Message />
        <SendMessage />
      </div>
    </>
  )
}

export default Chat
