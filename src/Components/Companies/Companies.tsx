import React, {useState} from 'react';
import Search from "../Utils/Search";
import {SearchResultForCompany} from "../Utils/SearchResults";
import {useCompaniesData} from "../../Hooks/Companies";
import CompaniesTable from "./CompaniesTable";

type Data = {
    data?: {
        data: Array<any>,
        count: number
    }
}

const Companies = () => {
    const [companyId, setCompanyId] = useState<undefined | number>();
    const [skip, setSkip] = useState<number>(1);
    const { data }: Data = useCompaniesData(companyId, undefined, 10 * (skip - 1));
    console.log(data)
    return (
        <div>
            <Search SearchResult={SearchResultForCompany} onSelect={(value: any, {valId}: {valId: number | undefined}) => {
                setCompanyId(valId);
            }} placeholder={'Company Search'} />
            <CompaniesTable companies={data?.data} total={data?.count} onChange={(val) => setSkip(val.current)} />
        </div>
    );
};

export default Companies;
