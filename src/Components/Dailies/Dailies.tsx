import React, {useCallback, useEffect, useState} from 'react';
import {dailies} from "../../API/Dailies/daily";
import {useDailiesData} from "../../Hooks/Dailies";
import DaliesListTable from "./DaliesListTable";
type Data = {
    data?: Array<any>
}
const Dailies: React.FC = React.memo(() => {
    const [dailiesData, setDailiesData] = useState<Array<any>>([]);
    const [filter, setFilter] = useState<{where: object, order: any, limit: number, skip: number}>({
        "where":{},
        "order":["id DESC"],
        "limit":10,
        "skip":0
        }
    );
    const [total, setTotal] = useState<number>(1);
    const { data }: Data = useDailiesData({date: null, filter})
    useEffect(() => {
        if(data) {
            setDailiesData(data)
            if(filter.skip === 0) {
                setTotal(Math.ceil(data[0]?.id) - 10)
            }
        }
    }, [data]);
    const changeCurrentSkip = useCallback((current: number) => {
        setFilter(value => {
            return {
                ...value,
                skip: current * 10
            }
        })
    }, [])
    console.log(dailiesData)
    return (
        <div>
            <h1>Dailies</h1>
            <DaliesListTable dailiesData={dailiesData} total={total} changeCurrentSkip={changeCurrentSkip} loading={!data} />
        </div>
    );
});

export default Dailies;
