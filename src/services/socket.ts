import { io } from "socket.io-client"

const socket = io(import.meta.env.VITE_API_URL)
window.socket = socket

export function sendMoves({
  from,
  to,
}: {
  from: [number, number]
  to: [number, number]
}) {
  socket.emit("move", { fromEnemy: from, toEnemy: to })
}

export default socket
