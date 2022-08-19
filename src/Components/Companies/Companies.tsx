import React from 'react';
import Search from "../Utils/Search";
import {SearchResultForCompany} from "../Utils/SearchResults";

const Companies = () => {
    return (
        <div>
            <Search SearchResult={SearchResultForCompany} onSelect={(value: any, {valId}: {valId: number | undefined}) => {
                console.log(value, valId)
            }} placeholder={'Company Search'} />
        </div>
    );
};

export default Companies;
