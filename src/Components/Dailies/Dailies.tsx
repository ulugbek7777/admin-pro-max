import React, {useEffect} from 'react';
import {dailies} from "../../API/Dailies/daily";

const Dailies: React.FC = React.memo(() => {
    useEffect(() => {
        dailies.read().then(u => u);
    }, [])
    return (
        <div>
            <h1>Dailies</h1>
        </div>
    );
});

export default Dailies;
