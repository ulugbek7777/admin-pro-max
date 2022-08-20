import React from 'react';
import {Spin, Table, Tag} from "antd";
import moment from "moment";
import {Link} from "react-router-dom";

interface companyDataSource {
    id: number | string;
    name: string,
    owner: number | string | undefined | null;
    isActive: boolean | undefined | null;
    payForDriver: boolean | undefined | null;
    isPaid: boolean | undefined | null;
    subscriptionQuantity: number | string | undefined | null;
    subscription: string | undefined | null;
    edit: number | string;
}
const columns: object[] = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Owner',
        dataIndex: 'owner',
        key: 'owner',
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
        title: 'Pay for driver',
        dataIndex: 'payForDriver',
        key: 'payForDriver',
        render: (tag: boolean) => (
            <Tag color={tag ? 'geekblue' : 'red'}>
                {tag ? 'True' : 'False'}
            </Tag>
        )
    },
    {
        title: 'Is paid',
        dataIndex: 'isPaid',
        key: 'isPaid',
        render: (tag: boolean) => (
            <Tag color={tag ? 'geekblue' : 'red'}>
                {tag ? 'True' : 'False'}
            </Tag>
        )
    },
    {
        title: 'Subscription quantity',
        dataIndex: 'subscriptionQuantity',
        key: 'subscriptionQuantity',
    },
    {
        title: 'Subscription',
        dataIndex: 'subscription',
        key: 'subscription',
        render: (tag: boolean) => (
            <Tag color={tag ? 'geekblue' : 'red'}>
                {tag ? 'True' : 'False'}
            </Tag>
        )
    },
    {
        title: 'Edit',
        dataIndex: 'edit',
        key: 'edit',
        render: (id: number | string) => <Link to={`${id}`}>Edit</Link>,
    },
];

const CompaniesTable = ({ companies = [], total = 0, onChange }: { companies: Array<any> | undefined, total: number | undefined, onChange(current: any): void }) => {
    return (
        <div>
            <Spin size="large" spinning={!companies?.length}>
                <Table onChange={onChange} dataSource={companies.map((u: any): companyDataSource => {
                    const obj: companyDataSource = {
                        id: u.id,
                        name: u.name,
                        owner: u.ownerId,
                        isActive: u?.is_active,
                        payForDriver: u?.payForDriver,
                        isPaid: u?.stripe?.subscription?.latest_invoice?.paid,
                        subscriptionQuantity: u.stripe.subscription?.quantity,
                        subscription: u.stripe.subscription?.status,
                        edit: u.id,
                    }
                    return obj;
                })} columns={columns} pagination={{ total: total, pageSizeOptions: [10] }} />
            </Spin>
        </div>
    );
};

export default CompaniesTable;
