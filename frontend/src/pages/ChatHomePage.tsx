import { useAuth } from "../util/AuthContext";
export default function ChatHomePage(){
    const { serverAddress, userId, privateKey, authToken, deleteLoginInfo } = useAuth();
    return <>
    
    <p>Zalogowano jako: {userId} na serwerze {serverAddress} z kluczem prywatnym {privateKey} i tokenem {authToken}</p>
    </>
}