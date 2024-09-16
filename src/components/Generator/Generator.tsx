import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Text } from "../../ui";

export const Generator = () => {
    const state = useState(uuidv4());

    const handleClick = () => {
        //id = uuidv4();
        state[1](uuidv4())
}

    return (
        <div>
            <Text>{state[0]}</Text>
            <Button label="Refresh" onClick={handleClick}/>
        </div>
    );
};