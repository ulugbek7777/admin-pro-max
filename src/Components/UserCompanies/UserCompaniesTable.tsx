import React from 'react';
import {Spin, Table, Tag} from "antd";
import {Link} from "react-router-dom";

// headers: [
//     {text: 'no', value: 'no', sortable: false },
//     {text: 'role', value: 'role', sortable: true },
//     {text: 'companyName', value: 'companyName', sortable: true },
//     {text: 'companyId', value: 'companyId', sortable: true },
//     {text: 'userName', value: 'userName', sortable: true },
//     {text: 'userEmail', value: 'userEmail', sortable: true },
//     {text: 'id', value: 'id', sortable: true },
//     {text: 'userId', value: 'userId', sortable: true },
//     {text: 'actions', value: 'actions', sortable: false },
// ]
interface userDataSource {
    no: number | string;
    role: string;
    company: string;
    userName: string | undefined;
    userEmail: string | undefined;
    id: number | string;
    userId: number | string | undefined;
    // actions: number | string;
}
const columns: object[] = [
    {
        title: 'No',
        dataIndex: 'no',
        key: 'no',
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
    },
    {
        title: 'UserName',
        dataIndex: 'userName',
        key: 'userName',
    },
    {
        title: 'UserEmail',
        dataIndex: 'userEmail',
        key: 'userEmail',
    },
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'UserId',
        dataIndex: 'userId',
        key: 'userId',
    },

];
const UserCompanies = ({ userCompanies, total = 0, onChange }: { userCompanies: Array<any> | undefined, total: number | undefined, onChange(current: any): void }) => {
    return (
        <div>
            <Spin size="large" spinning={!userCompanies}>
                <Table onChange={onChange} dataSource={userCompanies?.map((u: any, i: number): userDataSource => {
                    const obj: userDataSource = {
                        no: i + 1,
                        role: u.role,
                        company: u.company.name,
                        userName: u.user?.first_name + ' ' + u?.user?.second_name,
                        userEmail: u.user?.email,
                        id: u.id,
                        userId: u.user?.id,
                    }
                    return obj;
                })} columns={columns} pagination={{ total: total, pageSizeOptions: [10] }} />
            </Spin>
        </div>
    )
};

export default UserCompanies;