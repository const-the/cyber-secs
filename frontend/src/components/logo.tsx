import { useState } from 'react';
export default function Logo(){
    const [clickCounter, setClickCounter] = useState(0);
    function handleClick(){
        setClickCounter(clickCounter+1)
    }
    return <h1 className='logo' onClick={handleClick}>{clickCounter>4?"Cyber-SECS":"gubledigub"}</h1>
}
