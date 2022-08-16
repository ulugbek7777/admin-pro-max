import { AutoComplete, Input } from 'antd';
import React, {useCallback, useState} from 'react';
import {useDailiesFindCompany} from "../../Hooks/Dailies";

type MyStructure = Object[];
const SearchResult = async (query: any) => {
    console.log(query)
    const data: MyStructure = await useDailiesFindCompany({name: query, id: undefined});
    const dataFor = [{id: undefined, name: 'All vehicles'}, ...data]
    return dataFor.map((el: any) => {
        const category = `${el.name}`;
        return {
            valId: el.id,
            value: category,
            label: (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                        <span>
                          Company: {el.name}
                        </span>
                </div>
            ),
        };
    });
}

const Search = ({SearchResult, onSelect}: {SearchResult: any, onSelect: any}) => {
    const [options, setOptions] = useState<Array<any>>([]);
    const debounce = (func: any) => {
        let timer: any;
        return function (...args: any) {
            // const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func(args[0])
            }, 500);
        };
    };
    const handleSearch = async (value: any) => {
        if(value) {
            let data = await SearchResult(value);
            setOptions(data);
        } else {
            setOptions([]);
        }

    };
    const optimizedFn = useCallback(debounce(handleSearch), []);
    // const onSelect = (value: any, {valId}: {valId: number | undefined}) => {
    //     findDailiesByCompany(valId)
    // };

    return (
        <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
                width: 300,
            }}
            options={options}
            onSelect={onSelect}
            onSearch={optimizedFn}
        >
            <Input.Search size="large" placeholder="input here" enterButton />
        </AutoComplete>
    );
};

export default Search;