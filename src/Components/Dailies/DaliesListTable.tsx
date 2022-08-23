import React from 'react';
import {DatePicker, PaginationProps, Spin, Table} from "antd";
import moment from "moment";
import Search from '../Utils/Search';
import {SearchResultForCompany, SearchResultForFindDriver} from '../Utils/SearchResults';

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
const DaliesListTable = ({dailiesData, total = 1, changeCurrentSkip, loading, findDailiesByCompany, findDailiesByDriver, changeDate}:
    {dailiesData: object[], total: number | undefined, changeCurrentSkip(current: number): any, loading: boolean, findDailiesByCompany(id: number | undefined): void, findDailiesByDriver(driverId: number | string | undefined): void, changeDate(date: string): void}) => {
    const onChange = (data: any) => {
        changeCurrentSkip(data.current - 1)
    }
    const onSelectDriver = (value: any, {valId}: {valId: number | string | undefined}) => {
        findDailiesByDriver(valId)
    }
    const datePicker = (date: any, dateString: any) => {
        console.log(date, dateString);
        changeDate(moment.utc(dateString, 'YYYY-MM-DD').add(11, 'hour').toISOString())
    };
    return (
        <div>
            <Search SearchResult={SearchResultForCompany} onSelect={(value: any, {valId}: {valId: number | undefined}) => {
                findDailiesByCompany(valId)
            }} placeholder={'Company Search'} />
            <Search SearchResult={(query: string) => SearchResultForFindDriver(query, undefined, 'driver')} onSelect={onSelectDriver} placeholder="Driver name"/>
            <DatePicker defaultValue={moment()} format={'YYYY-MM-DD'} disabledDate={(current) => {
                let customDate = moment().add(1, 'd').format("YYYY-MM-DD");
                return current && current > moment(customDate, "YYYY-MM-DD");
            }} style={{position: 'absolute'}} onChange={datePicker} />
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
