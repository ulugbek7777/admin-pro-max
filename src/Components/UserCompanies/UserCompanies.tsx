import React, {useState} from 'react';
import {useUserCompaniesData} from "../../Hooks/UserCompanies";
import UserCompaniesTable from "./UserCompaniesTable";
import {SearchResultForCompany, SearchResultForFindDriver} from "../Utils/SearchResults";
import Search from "../Utils/Search";
import {Button, Select} from "antd";
import AddMultiUserModal from "./AddMultiUserModal";

type Data = {
    data?: {
        data: Array<any>,
        count: number
    }
}
const { Option } = Select;
const UserCompanies = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [skip, setSkip] = useState(0);
    const [driverId, setDriverId] = useState<undefined | number | string>(undefined);
    const [role, setRole] = useState<string | undefined>(undefined);
    const [companyId, setCompanyId] = useState<undefined | number>();
    const { data }: Data = useUserCompaniesData(companyId, role, driverId, skip);
    const onChange = (query: any) => {
        setSkip(10 * (parseInt(query.current) - 1));
    }
    const onSelectDriver = (value: any, {valId}: {valId: number | string | undefined}) => {
        setDriverId(valId);
    }
    const showModal = () => {
        setIsModalVisible(true);
    };
    return (
        <div>
            {isModalVisible && <AddMultiUserModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} userId={driverId}
                                companyId={companyId} userRole={role}/>}
            <Search SearchResult={(query: string) => SearchResultForFindDriver(query, undefined, role)} onSelect={onSelectDriver} placeholder="User name"/>
            <Search SearchResult={SearchResultForCompany} onSelect={(value: any, {valId}: {valId: number | undefined}) => {
                setCompanyId(valId);
            }} placeholder={'Company Search'} />
            <Select defaultValue="all" onChange={(value, option) => {
                setRole(value === 'all' ? undefined : value)
            }} style={{ width: 200, position: 'absolute' }}>
                <Option key={'all'}>All Users</Option>
                <Option key={'super-dispatcher'}>Super Dispatcher</Option>
                <Option key={'dispatcher'}>Dispatchers</Option>
                <Option key={'admin'}>Admins</Option>
            </Select>
            <Button type="primary" style={{float: "right"}} size={'large'} onClick={showModal}
                    // disabled={!(driverId || companyId || role)}
            >ADD MULTI USER</Button>
            <UserCompaniesTable userCompanies={data?.data} total={data?.count} onChange={onChange} />
        </div>
    )
};

export default UserCompanies;