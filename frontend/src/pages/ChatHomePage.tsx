import { useAuth } from "../util/AuthContext";
import Logo from "../components/logo";
import Loader from "../components/Loader";
export default function ChatHomePage() {
    const { serverAddress, userId, privateKey, authToken, deleteLoginInfo } = useAuth();
    return <div className="app-container">
        <nav className="navbar">
            <Logo />
            <button onClick={deleteLoginInfo}>Wyloguj</button>
            <p>Zalogowano jako: {userId} na serwerze {serverAddress} z kluczem prywatnym {privateKey} i tokenem {authToken}</p>
        </nav>
        <div className="main-content">
            <aside className="sidebar">
                <p>Grupczaty</p>
            </aside>
            <main className="chat-area">
                <p>Wiadomości będą tutaj</p>
                <Loader/>
            </main>
        </div>
        
    </div>
}