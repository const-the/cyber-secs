import { useAuth } from "../util/AuthContext";
import Logo from "../components/Logo";
import { useEffect, useState } from "react";
import type { Groupchat } from "../types";
import { NavLink, Outlet } from "react-router";
import AddGroupDialog from "../components/AddGroupDialog";
export default function ChatHomePage() {
    const [groupchats, setGroupchats] = useState<Groupchat[]>([]);
    const { serverAddress, userId, privateKey, authToken, deleteLoginInfo } = useAuth();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    function loadGroupchats() {
        // TODO: zrobić by ta funkcja faktycznie coś wczytywała
        const loadedGroupchats = [
            {
                id: "czat z koniem",
                users: ["crafter", "horse"],
                leader: "horse"
            },
            {
                id: "uber",
                users: ["uber", "you"],
                leader: "you"
            }
        ]
        return loadedGroupchats
    }


    useEffect(() => {
        setGroupchats(loadGroupchats());
    }, []);

    const gcList = groupchats.map(gc => (
        <NavLink
            to={`/chat/${gc.id}`}
            key={gc.id}
            className={({ isActive }) => isActive ? "groupchat-tile active" : "groupchat-tile"} >
            {gc.id}
        </NavLink>
    ));
    return <div className="app-container">
        <AddGroupDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} onSave={(members: string[]) => {console.log(members)}}/>
        <nav className="navbar">
            <Logo withBorder={false}/>
            <p>Zalogowano jako: {userId} na serwerze {serverAddress} z kluczem prywatnym {privateKey} i tokenem {authToken}</p>
            <button onClick={deleteLoginInfo}>Wyloguj</button>
        </nav>
        <div className="main-content">
            <aside className="sidebar">
                <p>Czaty:</p>
                <ul className="chat-list">{gcList}</ul>
                <button onClick={()=>{
                    setIsDialogOpen(true)
                }}>Dodaj nowy czat</button>
            </aside>
            <Outlet />
        </div>
    </div>
}