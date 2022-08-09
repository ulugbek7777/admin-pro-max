import React from 'react';
import {PaginationProps, Spin, Table} from "antd";
import moment from "moment";
import CompanySearchDaily from "./CompanySearchDaily";

interface dalyDataSource {
    id: number | string;
    driver: string | undefined | null;
    date: string;
    lastLogStatus: string | undefined | null;
    lastLogStartDate: string | undefined | null;
    lastLogEndDate: string | undefined | null;
    key: number | string;
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
const DaliesListTable = ({dailiesData, total = 1, changeCurrentSkip, loading, findDailiesByCompany}: {dailiesData: object[], total: number | undefined, changeCurrentSkip(current: number): any, loading: boolean, findDailiesByCompany(id: number | undefined): any}) => {
    const onChange = (data: any) => {
        changeCurrentSkip(data.current - 1)
    }
    return (
        <div>
            <CompanySearchDaily findDailiesByCompany={findDailiesByCompany} />
            <Spin size="large" spinning={loading}>
                <Table onChange={onChange} dataSource={dailiesData.map((u: any): dalyDataSource => {
                    const obj: dalyDataSource = {
                        id: u.id,
                        driver: u.cache ? u.cache?.driver.first_name + ' ' + u.cache?.driver.second_name : '',
                        date: moment(u.date).format('MM-DD-YYYY'),
                        lastLogStatus: u.last_log?.status,
                        lastLogStartDate: u.last_log?.start_date,
                        lastLogEndDate: u.last_log?.end_date,
                        key: u.id
                    }
                    return obj;
                })} columns={columns} pagination={{ total: total, pageSizeOptions: [10] }} />
            </Spin>
        </div>
    );
};

export default DaliesListTable;
