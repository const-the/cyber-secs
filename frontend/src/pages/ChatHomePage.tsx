import { useAuth } from "../util/AuthContext";
export default function ChatHomePage(){
    const { serverAddress, userId, privateKey, authToken, login } = useAuth();
    return <>
    <p>Zalogowano jako: {userId}</p>
    </>
}