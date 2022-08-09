import React, {useCallback, useEffect, useState} from 'react';
import {dailies} from "../../API/Dailies/daily";
import {useDailiesData} from "../../Hooks/Dailies";
import DaliesListTable from "./DaliesListTable";
type Data = {
    data?: {
        data: Array<any>,
        count: number
    }
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
    const [countFilter, setCountFilter] = useState<{companyId: number | string}>({
        "companyId": ''
    })
    const [total, setTotal] = useState<number>(1);
    const { data }: Data = useDailiesData({date: null, filter, countFilter})
    useEffect(() => {
        if(data) {
            setDailiesData(data.data)
            if(filter.skip === 0) {
                setTotal(data.count)
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
    const findDailiesByCompany = useCallback((id: number) => {
        setFilter(value => {
            return {
                ...value,
                where: id ? {companyId: id} : {}
            }
        })
        setCountFilter({companyId: id ? id : ''})
        }, [],
    );

    console.log(dailiesData)
    return (
        <div>
            <h1>Dailies</h1>
            <DaliesListTable dailiesData={dailiesData} total={total} changeCurrentSkip={changeCurrentSkip} loading={!data} findDailiesByCompany={findDailiesByCompany} />
        </div>
    );
});

export default Dailies;
