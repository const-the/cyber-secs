import { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../components/logo";
import Autentykacja from "../../assets/autentykacja.gif";
import { useAuth } from "../util/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { saveLoginInfo } = useAuth();
    const [serverAddress, setServerAddress] = useState("");
    const [userName, setUserName] = useState("");
    const [privateKey, setPrivateKey] = useState("");

    function authenticate() {
        // TODO tutaj powinna być komunikacja z API

        saveLoginInfo({
            serverAddress,
            userId: "1234",// TODO zrobić by to było równe hash(userName)
            privateKey,
            authToken: "44"
        });
        navigate("/chat");
    }

    return <div className="login-card">
        <Logo />
        <h1>Logowanie do serwisu</h1>
        <label htmlFor="addr">Adres serwera</label>
        <input
            type="text"
            id="addr"
            placeholder="np. localhost:2137"
            value={serverAddress}
            onChange={(event) => setServerAddress(event.target.value)}
        />
        <label htmlFor="username">Nazwa użytkownika:</label>
        <input
            type="text"
            id="username"
            placeholder="np. bob"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
        />
        <label htmlFor="private-key">Klucz prywatny:</label>
        <textarea
            id="private-key"
            placeholder="np. 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"
            value={privateKey}
            onChange={(event) => setPrivateKey(event.target.value)}
        />
        <button type="button" onClick={authenticate}>
            <img src={Autentykacja} alt="Zaloguj się" />
        </button>
    </div>;
}
