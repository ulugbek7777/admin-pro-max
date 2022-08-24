import React, {useState} from 'react';
import {useUsersData} from "../../Hooks/Users";
import Search from "../Utils/Search";
import {SearchResultForFindDriver} from "../Utils/SearchResults";
import UsersTable from "../Utils/UsersTable";
import {Select} from "antd";

type Data = {
    data?: {
        data: Array<any>,
        count: number
    }
}
const { Option } = Select;

const Users = () => {
    const [skip, setSkip] = useState(0);
    const [driverId, setDriverId] = useState<undefined | number | string>(undefined);
    const [role, setRole] = useState<string | undefined>(undefined)
    const { data }: Data = useUsersData(undefined, role, driverId, skip);
    const onChange = (query: any) => {
        setSkip(10 * (parseInt(query.current) - 1));
    }
    const onSelectDriver = (value: any, {valId}: {valId: number | string | undefined}) => {
        setDriverId(valId);
    }
    return (
        <div>
            <Search SearchResult={(query: string) => SearchResultForFindDriver(query, undefined, role)} onSelect={onSelectDriver} placeholder="Driver name"/>
            <Select defaultValue="all" onChange={(value, option) => {
                setRole(value === 'all' ? undefined : value)
            }} style={{ width: 200, position: 'absolute' }}>
                <Option key={'all'}>All Users</Option>
                <Option key={'driver'}>Drivers</Option>
                <Option key={'dispatcher'}>Dispatchers</Option>
                <Option key={'admin'}>Admins</Option>
            </Select>
            <UsersTable users={data?.data} total={data?.count} onChange={onChange} />
        </div>
    )
};

export default Users;