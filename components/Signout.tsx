import { useRouter } from "next/dist/client/router"
import React from "react"
import { auth } from "../firebase"

function Signout({ signout }: any) {
  return (
    <button className="btn btn-danger mb-1" onClick={signout}>
      SignOut
    </button>
  )
}

export default Signout
