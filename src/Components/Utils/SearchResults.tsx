import React from 'react';
import {useDailiesFindCompany, useDailiesFindDriver} from '../../Hooks/Dailies';

type MyStructure = Object[];
export const SearchResultForFindDriver = async (query: any, companyId: number | undefined, role: string | undefined) => {
    const data: MyStructure = await useDailiesFindDriver({name: query, companyId, role});
    const dataFor = [{id: undefined, first_name: 'All', second_name: 'Users', role: 'User'}, ...data]
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
                          {el.role.toUpperCase()}: {el.first_name + ' ' + el.second_name}
                        </span>
                </div>
            ),
        };
    });
}

export const SearchResultForCompany = async (query: string) => {
    const data: MyStructure = await useDailiesFindCompany({name: query, id: undefined});
    const dataFor = [{id: undefined, name: 'All vehicles'}, ...data]
    return dataFor.map((el: any) => {
        const category = `${el.name}`;
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
                          Company: {el.name}
                        </span>
                </div>
            ),
        };
    });
}