import React, {useState} from 'react';
import Search from "../Utils/Search";
import {SearchResultForCompany} from "../Utils/SearchResults";
import {useCompaniesData} from "../../Hooks/Companies";

type Data = {
    data?: {
        data: Array<any>,
        count: number
    }
}

const Companies = () => {
    const [companyId, setCompanyId] = useState<undefined | number>();
    const { data }: Data = useCompaniesData(companyId, undefined);
    console.log(data)
    return (
        <div>
            <Search SearchResult={SearchResultForCompany} onSelect={(value: any, {valId}: {valId: number | undefined}) => {
                setCompanyId(valId);
            }} placeholder={'Company Search'} />
        </div>
    );
};

export default Companies;
