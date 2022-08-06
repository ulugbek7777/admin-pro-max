import React, {useEffect, useState} from 'react';
import {dailies} from "../../API/Dailies/daily";
import {useDailiesData} from "../../Hooks/Dailies";
import DaliesListTable from "./DaliesListTable";
type Data = {
    data?: object[]
}
const Dailies: React.FC = React.memo(() => {
    const [dailiesData, setDailiesData] = useState<object[]>([]);
    const { data }: Data = useDailiesData({date: null})
    useEffect(() => {
        if(data) {
            setDailiesData(data)
        }
    }, [data]);
    console.log(dailiesData)
    return (
        <div>
            <h1>Dailies</h1>
            <DaliesListTable dailiesData={dailiesData}/>
        </div>
    );
});

export default Dailies;
