import React from 'react';
import {PaginationProps, Table} from "antd";

interface dalyDataSource {
    id: number | string;
    driver: string | undefined | null;
    date: string;
    lastLogStatus: string | undefined | null;
    lastLogStartDate: string | undefined | null;
    lastLogEndDate: string | undefined | null;
}

const dataSource: dalyDataSource[] = [
    {
        id: 1,
        driver: 'dfvcfewfw',
        date: '12-32-2323',
        lastLogStatus: 'string',
        lastLogStartDate: 'string',
        lastLogEndDate: 'string',
    },
    {
        id: 1,
        driver: 'dfvcfewfw',
        date: '12-32-2323',
        lastLogStatus: 'string',
        lastLogStartDate: 'string',
        lastLogEndDate: 'string',
    },
];
const columns: object[] = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Driver',
        dataIndex: 'driver',
        key: 'driver',
    },
    {
        title: 'lastLogStatus',
        dataIndex: 'lastLogStatus',
        key: 'lastLogStatus',
    },
    {
        title: 'lastLogStartDate',
        dataIndex: 'lastLogStartDate',
        key: 'lastLogStartDate',
    },
    {
        title: 'lastLogEndDate',
        dataIndex: 'lastLogEndDate',
        key: 'lastLogEndDate',
    },
];
const DaliesListTable = ({dailiesData}: {dailiesData: object[]}) => {
    const onChange = (data: any) => {
        console.log(data)
    }
    return (
        <div>
            <Table onChange={onChange} dataSource={dailiesData.map((u: any): dalyDataSource => {
                const obj = {
                    id: u.id,
                    driver: u.cache?.driver.first_name + ' ' + u.cache?.driver.second_name,
                    date: u.date,
                    lastLogStatus: u.cache?.driver.status.status,
                    lastLogStartDate: u.cache?.driver.status.start_date,
                    lastLogEndDate: u.cache?.driver.status.end_date
                }
                return obj;
            })} columns={columns} pagination={{ defaultPageSize: 10, total: 100}} />
        </div>
    );
};

export default DaliesListTable;
