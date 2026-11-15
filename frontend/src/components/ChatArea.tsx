import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Message } from "../types";
import MessageComponent from "./MessageComponent";

export default function ChatArea() {
    const [messages, setMessages] = useState<Message[]>([]);
    const messageList = messages.map(msg => <MessageComponent key={msg.id} msg={msg} />)
    const params = useParams();
    const gc_id = params.gc_id;
    function loadMessagesFromGroupChat() {
        // TODO: zrobić by ta funkcja faktycznie coś wczytywała
        if (gc_id == "czat z koniem") {
            return [
                {
                    id: 0,
                    author: "crafter",
                    timestamp: "2026-11-14T22:21:00",
                    type: "text",
                    content: "dude"
                },
                {
                    id: 1,
                    author: "crafter",
                    timestamp: "2026-11-14T22:21:01",
                    type: "text",
                    content: "i'm so hungry rn"
                },
                {
                    id: 2,
                    author: "crafter",
                    timestamp: "2026-11-14T22:21:02",
                    type: "text",
                    content: "i could"
                },
                {
                    id: 3,
                    author: "crafter",
                    timestamp: "2026-11-14T22:21:03",
                    type: "text",
                    content: "eat a"
                },
                {
                    id: 4,
                    author: "horse",
                    timestamp: "2026-11-14T22:21:10",
                    type: "text",
                    content: "go on"
                },
            ]
        } else if (gc_id == "uber") {
            return [
                {
                    id: 0,
                    author: "uber",
                    timestamp: "2026-11-14T14:29:00",
                    type: "text",
                    content: "I am here for you"
                },
                {
                    id: 1,
                    author: "you",
                    timestamp: "2026-11-14T14:29:01",
                    type: "text",
                    content: "Thanks :) I'm going through a touch time so it means a lot"
                },
                {
                    id: 2,
                    author: "you",
                    timestamp: "2026-11-14T14:29:02",
                    type: "text",
                    content: "And sorry, I lost all my contacts who is this?"
                },
                {
                    id: 3,
                    author: "uber",
                    timestamp: "2026-11-14T14:29:03",
                    type: "text",
                    content: "This is your Uber driver"
                },
                {
                    id: 3,
                    author: "uber",
                    timestamp: "2026-11-14T14:29:03",
                    type: "text",
                    content: "I am here to pick you up"
                },
                {
                    id: 4,
                    author: "you",
                    timestamp: "2026-11-14T14:29:03",
                    type: "text",
                    content: "Oh"
                },
            ]
        }
        else {
            return []
        }
    }
    function displayMessagesFromGroupchat() {
        setMessages(loadMessagesFromGroupChat())
    }
    useEffect(() => {
        if (gc_id) {
            displayMessagesFromGroupchat();
        }
    }, [gc_id])

    const [inputedMessage, setInputedMessage] = useState("");

    return <main className="chat-area">
        <div className="chat-area-inner">
            {
                messages.length === 0 ? <p>Wiadomości będą tutaj</p> : messageList
            }
        </div>
        <div className="chat-input-tile">
            <input type="text" className="chat-text-input" placeholder="Pisz wiadomość..." onChange={(e) => setInputedMessage(e.target.value)} value={inputedMessage} />
            <button type="submit" onClick={() => {
                setInputedMessage("");
                setMessages([...messages, {
                    id: Math.floor(Math.random() * 2137),
                    author: "you",
                    timestamp: new Date().toISOString(),
                    type: "text",
                    content: inputedMessage
                }])
            }}>Wyślij</button>
        </div>
    </main>
}