import React, {useState} from 'react';
import {useUsersData} from "../../../Hooks/Users";
import {useParams} from "react-router-dom";
import UsersTable from "../../Utils/UsersTable";
import {SearchResultForFindDriver} from "../../Utils/SearchResults";
import Search from "../../Utils/Search";

type Data = {
    data?: {
        data: Array<any>,
        count: number
    }
}
type params = {
    readonly id: any
}
const TabDrivers = () => {
    const { id } = useParams<params>();
    const [skip, setSkip] = useState(0);
    const [driverId, setDriverId] = useState<undefined | number | string>(undefined);
    const companyId: number = parseInt(id);
    const { data }: Data = useUsersData(companyId, 'driver', driverId, skip);
    const onChange = (query: any) => {
        setSkip(10 * (parseInt(query.current) - 1));
    }
    const onSelectDriver = (value: any, {valId}: {valId: number | string | undefined}) => {
        setDriverId(valId);
    }
    return (
        <div>
            <Search SearchResult={(query: string) => SearchResultForFindDriver(query, id, 'driver')} onSelect={onSelectDriver} placeholder="Driver name"/>
            <UsersTable users={data?.data} total={data?.count} onChange={onChange} />
        </div>
    );
};

export default TabDrivers;
