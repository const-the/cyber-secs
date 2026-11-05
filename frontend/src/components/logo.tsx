import { useState } from 'react';
export default function Logo(){
    const [clickCounter, setClickCounter] = useState(0);
    function 𓃠𓃠𓃘𓃂𓆤𓃠(){
        setClickCounter(clickCounter+1)
        document.title = "Cyber-SECS"
    }
    return <h1 className='logo' onClick={𓃠𓃠𓃘𓃂𓆤𓃠}>{clickCounter>4?"Cyber-SECS":"gubledigub"}</h1>
}
