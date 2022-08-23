import React from 'react';
import {Spin, Table, Tag} from "antd";
import {Link} from "react-router-dom";

interface userDataSource {
    id: number | string;
    first_name: string;
    second_name: string;
    company: {name: string, id: string | number};
    role: string,
    isActive: boolean | undefined | null;
    email: string;
    edit: number | string;
}
const columns: object[] = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'First name',
        dataIndex: 'first_name',
        key: 'first_name',
    },
    {
        title: 'Second name',
        dataIndex: 'second_name',
        key: 'second_name',
    },
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        render: (val: {name: string, id: string | number}) => (
            <Link to={`/companies/${val.id}`}>Company: {val.name}</Link>
        )
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'Is active',
        dataIndex: 'isActive',
        key: 'isActive',
        render: (tag: boolean) => (
            <Tag color={tag ? 'geekblue' : 'red'}>
                {tag ? 'True' : 'False'}
            </Tag>
        )
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Edit',
        dataIndex: 'edit',
        key: 'edit',
        render: (id: number | string) => <Link to={`/users/${id}`}>Edit</Link>,
    },
];
const UsersTable = ({ users = [], total = 0, onChange }: { users: Array<any> | undefined, total: number | undefined, onChange(current: any): void }) => {
    return (
        <div>
            <Spin size="large" spinning={!users?.length}>
                <Table onChange={onChange} dataSource={users.map((u: any): userDataSource => {
                    const obj: userDataSource = {
                        id: u.id,
                        first_name: u.first_name,
                        second_name: u.second_name,
                        company: {name: u.companyId, id: u.companyId},
                        role: u.role.toUpperCase(),
                        isActive: u.is_active,
                        email: u.email,
                        edit: u.id,
                    }
                    return obj;
                })} columns={columns} pagination={{ total: total, pageSizeOptions: [10] }} />
            </Spin>
        </div>
    )
};

export default UsersTable;