import { useState, useEffect } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((value) => value + 1);
        }, 1000);
        console.log('in use effect');
    return () => {
        console.log('in use effect unmount');
        clearInterval(id);
    };
}, []);
return <div>{count}</div>;
};



