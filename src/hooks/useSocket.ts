import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import type { Socket } from "socket.io-client"

export default function useSocket() {
  const [socket, setSocket] = useState<Socket>()

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!socket) {
      console.log({ socket })
      const newSocket = io(import.meta.env.VITE_API_URL)
      setSocket(newSocket)
      window.socket = newSocket
      console.log({ newSocket })
    }
  }, [])
  return { socket }
}