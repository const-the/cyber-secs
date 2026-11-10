import Logo from "../components/logo"
import { useAuth } from "../util/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router";
export default function Register() {

    const { saveLoginInfo } = useAuth();
    const [serverAddress, setServerAddress] = useState("");
    const [userName, setUserName] = useState("");
    const [publicKey, setPublicKey] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const navigate = useNavigate();

    const {} = useAuth();
    function generateKeys(){
        // TODO tutaj ma się jakoś odbywać wezwanie do biblioteki generującej klucze 📚
        setPrivateKey("4")
        setPublicKey("fueiwchfueiwhcrfqueiwbdhfqueiwi")

    }
    function registerUser(){
        // TODO tutaj ma się odbywać faktyczna komunikacja z serwerem jakaś
        // powinna też być obsługa błędów i jakiś element UI do wyświetlania błędów⚠️
        saveLoginInfo({
            serverAddress: serverAddress,
            userId: "1234", // TODO zrobić by to było równe hash(userName)🏷️
            privateKey: "4",
            authToken: "token"
        })
        navigate("/chat");
    }

    return <div className="login-card">
        <Logo />
        <h1>Rejestracja</h1>
        <label htmlFor="addr">Adres serwera</label>
        <input type="text" id="addr" placeholder="np. localhost:2137" value={serverAddress} onChange={(e) => { setServerAddress(e.target.value) }}></input>
        <label htmlFor="username">Nazwa użytkownika:</label>
        <input type="text" id="username" placeholder="np. alicja" value={userName} onChange={(e) => { setUserName(e.target.value) }}></input>
        <p>
            <button type="submit" onClick={generateKeys}>Generuj klucze</button>
            <label htmlFor="public-key">Klucz publiczny:</label>
            <textarea id="public-key"
                value={publicKey}
                onChange={(e) => { setPublicKey(e.target.value) }}
                placeholder="np. voS/PAi4ZJMMeAKpRRwJWMyYXzp1d/AEfKVLaCM1jYXDG+WoaBZ2bEaMX0PELrnKdxcYZtpRvkjC++kdjto2HTxcJPgHfUYNLnINuHHPuZYDmVAfZvllDdWgYVxVIDbLhOuYCYdsmvATH8PMhStRGlV8iVvFyjek0jRtxvSHfTeaKig0ydamCasAWZCkynsVKUSOsuIN5WTEVEMTZhmeh8JdofZSssyyAJ11QYck+vScPUmA9sK+W/QfTjm2YaBHhCVdHqgK6sIsK+KWzXIHeGyrHHJcM8sLGmxXPSWqLpAxADI6C7o6b1Ngx7ciw4QYV4IZzcSO0vh14JlxF2Eg3/pA9Fh2RBqffWlmWaQZrrkWDAiYj+U74Ug/hnBnSXpdd5V/fWBWUZE155FhbCBri3E49xMZ/MBwRaaa9OVey9ZKHLx90sKBKPFl91G6y5cdnNRqrhBkbWQ1GZYTSIoYeVK/ovbPgXNAZeSKheLCIjM6UJcr+cKCcsgdSwiZAZuSXSt9etYqbMVwTZtNzFUraxa+FDGC1SXIaGaLakssVaSoQTPLuAQflFKWzZnPXDK8/qOb8CEdDHrHK6CRlZwznfoFZVEQCvM1kGCubPWjbKJBy/KpmMkCW1mogzt8bWWgc2bIJJRi+9wowlyRe+ozl7UO86RL7yUxLCRMq8EHJUQelIinhXMBxyEAQEUoOFK36+x+oNAEy2rPRkqEDtuTPJoQxEeHEuqP0UyIB7t2alsQAmw00RvDfhpHdipIKiFYocp4uKWE91KUKwSkZwbNToBrhSt9XAg7G6pRq5Bvm/uThcYq90mXoQxFi1ahrkCCWIgHffeeXtBJteFc7XGp6thDLGYoncy834BZ9pg4Q8nORNG7ujADSioXilBu1cg7Z5OHfkYmHFgRbuYCHGUhTiGsafgy7mOEbbsQ7tVkheHO4KOh+HIJLfBJGKgcnEZ9AZpfsldLD2AlcGZYU1RZXFQ+Jjojmxgf5EuDFYzL3tl88OoR7GWX6CARPRKXqZoos/skrnMWlAkm1QBV3DqUejyrmHTOqAsVAMd93KKLAVRuvik7YMGgEZZRmlBvEEGI8AoeZ4Oj+TOomcwSp/wmMEWdgQhBDwirUGJaTBqO/CKlk8MSxrekVDMurFFfoOVEjBIbFJmfKEs4g4Ep8vyFZ9IVxEWTB2p1H5hLZjB6CBgbxAohWAGiLINVXAlgVAYJiZtzL2unB9Qi3Ug2cEiSi0qG26qSu2ciaaHCbCHNfARJL5or04RT71QqawZriAZD8YJhlfyy45oGJDJ3hLyaQuK3ZSpIpdMF17d24jIMTtTNPVeZHwQMs7IP0IwNv4FDjIkm+zoacogTZZFxoIc7GztFccALy3OgwVm2MVYzqIppoVOdpGmR7SlR5gu2pOmhIWWPHyfJzoAq+MYf7sB4facLI4Oag2AfacOCTHXHshAZiHfKwOWSsUhbQCFBnoK3VMo+oiVCLByA1ruqpqJz9XlxH9LKzRJYVlNPfgVu+ocQUgbCemmlq6xoH+CtviJoX4QSNknfiDYykCmtkVAfJBb0wX8Aax7dgsY1MWVS7nc="></textarea>
            <label htmlFor="private-key">Klucz prywatny:</label>
            <textarea id="private-key"
                value={privateKey}
                onChange={(e) => { setPrivateKey(e.target.value) }}
                placeholder="np. RPu64jKALFGreRBMsdUOJLPFtnkPN0jFfSI7E+LOU3E4fDVVPhpk6ozPjcUPMxGuYpljImxiZ7urKipSgDPP3LyueuwToxxIuWO7Xbunj3uiMoSqDMW7/ZgKaXNIZslYOic7EEuznRsLIDfH4qaRaQu8i+ltd3yDePyM/qFtatPGmjZkB2siezs1uyteidZ/jqK+GWYhLTMMY5gwclypUAdjzQknt5gJWuK7bWM0n2G+UHLAC6bMnQRnDjIylXVtrkFkgWQeKbzHAlwdrtSrxFTNb6G8oxO6WHEzeyZ2x5izBluouVYjBaRgHPxTnLA/39kHcHkcA/Q1Y3SzSQsxgJexj/ARJrI+3qix9hnLIic4Ghsk0lEgzEBovKKeF6pMH1BqjXgEjQoGJxYbTaAjdBEL23bBZleUtREPUvld3kuDwHINruKTabrIBuSWjoMsLahrJCA1P7ep8xOxAAlBsjhZqayhq6Uoa6uxaIgk5dMgTLYDovulZkglFEJJHPog8guVFae1vXksL5B6/0Mc5mk+hhahY4WK2qoXyfBXsgJTs1GhOHVFueqOE6JB+ZeaVfiuG+iBshoxXCHFmPScmjJvO1dNTIjN1LWEHIRN9gRQ4gm254arU0l9/ANTDJi1T1Ud8igkibzEiQIBpJLBRNt4NDEQ5kte2eEO4GlPJwqvMfeL1oBVyxE35nwUCugZLcQju+w6+RoLBwBRQrAKCSbL6YuGP+XFpae0ZZwdMckAs6Fc/crO6nWosVZr/6aT44zD/Ig9eJG2mJE5BvZ40UWz5DQQgEy0LyjHMpuS9LgCKfE4duidizmO8Fa/kal5VFqxMRtduJRXIRkKhvWZXEqEGrofRfWrWXKp/txqezghVAlBsTqibyMiBzewHmqz6Igua+cCUPsaTudIGqrB+KJsKrKfURUh6AMiz/tXHhClSZor1LC174WAXvstCldSmJcaPvMH1idghDhGsVELsUgqyLi/DstC4jdOKiURWkyTTlbM3rRtrum8Y0V3YQqnV9JAtagppfR7jmOAkUyQd/J6QqRKyuUB6AA5J/Q9P6W2kaNiuUyGdycJuFhjsylvyicUVok0E/w0OHxxcsQMJ8eAJTQGRRdTcvmPxOJQOoFne8K/HLqxYqCFXFMQtwGLRbNHUsMXMNqfDKmb5zJSwHJMtVNfWFOKKGcAQGBkFFuSBWeTdbsKBXexjqJjDjCzU3jPWfGv/4yxAbdI8CxVxIWITCkvKwWEQoock7pQBfh5vPTG0hdhbdBWEdm5q4EmP6lrxJJOgzgdkZqFQPBoXJm5bWrDsPWlb+lcyhELA2bPGUtlNAI8rDPAwkJ0F9NaxAINJdyxcst/CJNzx7Cqp3WBIiGk8/O+0tB6sybIxkC9cvRXSck+uISzz2l6rZQafunIKqtpIkWmj5EWkpKQJzs+qjKuOSueyoOoO7KsMxqgl/U7D/dSBTihcVN0b6d8bheunhsqGIciDkFHRbN/Dryza6MhCoZiTjieAZKIpSqpG8kc9GnOLvOXKOCa9mlpvoS/PAi4ZJMMeAKpRRwJWMyYXzp1d/AEfKVLaCM1jYXDG+WoaBZ2bEaMX0PELrnKdxcYZtpRvkjC++kdjto2HTxcJPgHfUYNLnINuHHPuZYDmVAfZvllDdWgYVxVIDbLhOuYCYdsmvATH8PMhStRGlV8iVvFyjek0jRtxvSHfTeaKig0ydamCasAWZCkynsVKUSOsuIN5WTEVEMTZhmeh8JdofZSssyyAJ11QYck+vScPUmA9sK+W/QfTjm2YaBHhCVdHqgK6sIsK+KWzXIHeGyrHHJcM8sLGmxXPSWqLpAxADI6C7o6b1Ngx7ciw4QYV4IZzcSO0vh14JlxF2Eg3/pA9Fh2RBqffWlmWaQZrrkWDAiYj+U74Ug/hnBnSXpdd5V/fWBWUZE155FhbCBri3E49xMZ/MBwRaaa9OVey9ZKHLx90sKBKPFl91G6y5cdnNRqrhBkbWQ1GZYTSIoYeVK/ovbPgXNAZeSKheLCIjM6UJcr+cKCcsgdSwiZAZuSXSt9etYqbMVwTZtNzFUraxa+FDGC1SXIaGaLakssVaSoQTPLuAQflFKWzZnPXDK8/qOb8CEdDHrHK6CRlZwznfoFZVEQCvM1kGCubPWjbKJBy/KpmMkCW1mogzt8bWWgc2bIJJRi+9wowlyRe+ozl7UO86RL7yUxLCRMq8EHJUQelIinhXMBxyEAQEUoOFK36+x+oNAEy2rPRkqEDtuTPJoQxEeHEuqP0UyIB7t2alsQAmw00RvDfhpHdipIKiFYocp4uKWE91KUKwSkZwbNToBrhSt9XAg7G6pRq5Bvm/uThcYq90mXoQxFi1ahrkCCWIgHffeeXtBJteFc7XGp6thDLGYoncy834BZ9pg4Q8nORNG7ujADSioXilBu1cg7Z5OHfkYmHFgRbuYCHGUhTiGsafgy7mOEbbsQ7tVkheHO4KOh+HIJLfBJGKgcnEZ9AZpfsldLD2AlcGZYU1RZXFQ+Jjojmxgf5EuDFYzL3tl88OoR7GWX6CARPRKXqZoos/skrnMWlAkm1QBV3DqUejyrmHTOqAsVAMd93KKLAVRuvik7YMGgEZZRmlBvEEGI8AoeZ4Oj+TOomcwSp/wmMEWdgQhBDwirUGJaTBqO/CKlk8MSxrekVDMurFFfoOVEjBIbFJmfKEs4g4Ep8vyFZ9IVxEWTB2p1H5hLZjB6CBgbxAohWAGiLINVXAlgVAYJiZtzL2unB9Qi3Ug2cEiSi0qG26qSu2ciaaHCbCHNfARJL5or04RT71QqawZriAZD8YJhlfyy45oGJDJ3hLyaQuK3ZSpIpdMF17d24jIMTtTNPVeZHwQMs7IP0IwNv4FDjIkm+zoacogTZZFxoIc7GztFccALy3OgwVm2MVYzqIppoVOdpGmR7SlR5gu2pOmhIWWPHyfJzoAq+MYf7sB4facLI4Oag2AfacOCTHXHshAZiHfKwOWSsUhbQCFBnoK3VMo+oiVCLByA1ruqpqJz9XlxH9LKzRJYVlNPfgVu+ocQUgbCemmlq6xoH+CtviJoX4QSNknfiDYykCmtkVAfJBb0wX8Aax7dgsY1MWVS7nf38rBqYXXPS1DSjolG2utTRQCqeTxXJvqR3N+RPJ6tlF+D5QUL+bFe93ycg4I+gH3ebvSaI5pzBh5ZXIyZMwVx"></textarea>
            <button type="submit" onClick={registerUser}>Rejestracja użytkownika</button>
        </p>
    </div>
}
