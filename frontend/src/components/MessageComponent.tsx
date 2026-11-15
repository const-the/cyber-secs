
import type { Message } from "../types";
export default function MessageComponent({ msg }: { msg: Message }) {
    const content = msg.type == "text" ? <div>{msg.content}</div> : <h6>Nie wspierany typ wiadomości</h6>
    return <div className="message-tile">
        <strong className="message-author">{msg.author}</strong>
        <div className="message-timestamp">{msg.timestamp}</div>
        {content}
    </div>
}