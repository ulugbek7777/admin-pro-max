import React from 'react';
import { useDailiesFindDriver } from '../../Hooks/Dailies';

type MyStructure = Object[];
export const SearchResultForFindDriver = async (query: any, companyId: number | undefined) => {
    const data: MyStructure = await useDailiesFindDriver({name: query, companyId});
    const dataFor = [{id: undefined, first_name: 'All', second_name: 'Drivers'}, ...data]
    return dataFor.map((el: any) => {
        const category = `${el.first_name + ' ' + el.second_name}`;
        return {
            valId: el.id,
            value: category,
            key: el.id,
            label: (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                    key={el.id}
                >
                        <span>
                          Driver: {el.first_name + ' ' + el.second_name}
                        </span>
                </div>
            ),
        };
    });
}