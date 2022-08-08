import React from 'react';
import {PaginationProps, Spin, Table} from "antd";
import moment from "moment";

interface dalyDataSource {
    id: number | string;
    driver: string | undefined | null;
    date: string;
    lastLogStatus: string | undefined | null;
    lastLogStartDate: string | undefined | null;
    lastLogEndDate: string | undefined | null;
}

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
        title: 'date',
        dataIndex: 'date',
        key: 'date',
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
const DaliesListTable = ({dailiesData, total = 1, changeCurrentSkip, loading}: {dailiesData: object[], total: number | undefined, changeCurrentSkip(current: number): any, loading: boolean}) => {
    const onChange = (data: any) => {
        changeCurrentSkip(data.current - 1)
    }
    return (
        <div>
            <Spin size="large" spinning={loading}>
                <Table onChange={onChange} dataSource={dailiesData.map((u: any): dalyDataSource => {
                    const obj = {
                        id: u.id,
                        driver: u.cache ? u.cache?.driver.first_name + ' ' + u.cache?.driver.second_name : '',
                        date: moment(u.date).format('MM-DD-YYYY'),
                        lastLogStatus: u.last_log?.status,
                        lastLogStartDate: u.last_log?.start_date,
                        lastLogEndDate: u.last_log?.end_date
                    }
                    return obj;
                })} columns={columns} pagination={{ total: total, pageSizeOptions: [10] }} />
            </Spin>
        </div>
    );
};

export default DaliesListTable;
