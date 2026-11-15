import { useState } from 'react';
export default function Logo({withBorder}: {withBorder: boolean}) {
    const [clickCounter, setClickCounter] = useState(0);
    function 𓃠𓃠𓃘𓃂𓆤𓃠() {
        setClickCounter(clickCounter + 1)
        if (clickCounter + 1 >= 5) {
            document.title = "Cyber-SECS"
        }
    }
    return <h1 className={withBorder ? 'logo bordered':'logo'} onClick={𓃠𓃠𓃘𓃂𓆤𓃠}>{clickCounter > 4 ? "Cyber-SECS" : "Gobbledygook"}</h1>
}
