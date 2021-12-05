import Head from "next/head"
import { useEffect } from "react"
import { auth } from "../../firebase"
import { useRouter } from "next/dist/client/router"
import { ChatHOC } from "../../hoc/chat-hoc"
function Chat() {
  const router = useRouter()

  useEffect(() => {
    let isAuth = auth.currentUser
    if (!isAuth) {
      router.push("/")
    }
    return () => {
      isAuth = null
    }
  }, [])
  return (
    <>
      <Head>
        <title>ChatApp | Chat</title>
      </Head>
      <div className="container mt-4">
        <ChatHOC />
      </div>
    </>
  )
}

export default Chat
